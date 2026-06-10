"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0,
    clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector(".content__img-inner");
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", this.resize);
  }
  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class TrailBase {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...container.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img)
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener("mousemove", this.handlePointerMove);
    container.addEventListener("touchmove", this.handlePointerMove);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.running = true;
      requestAnimationFrame(() => this.render());
      container.removeEventListener("mousemove", this.initRender);
      container.removeEventListener("touchmove", this.initRender);
    };
    container.addEventListener("mousemove", this.initRender);
    container.addEventListener("touchmove", this.initRender);
  }

  destroy() {
    this.running = false;
    this.container.removeEventListener("mousemove", this.handlePointerMove);
    this.container.removeEventListener("touchmove", this.handlePointerMove);
    this.container.removeEventListener("mousemove", this.initRender);
    this.container.removeEventListener("touchmove", this.initRender);
    this.images.forEach((img) =>
      window.removeEventListener("resize", img.resize)
    );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

class ImageTrailVariant1 extends TrailBase {
  render() {
    if (!this.running) return;
    const rect = this.container.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    if (inView) {
      const distance = getMouseDistance(this.mousePos, this.lastMousePos);
      this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
      this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
      if (distance > this.threshold) {
        this.showNextImage();
        this.lastMousePos = { ...this.mousePos };
      }
      if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        },
        0
      )
      .to(
        img.DOM.el,
        { duration: 0.4, ease: "power3", opacity: 0, scale: 0.2 },
        0.4
      );
  }
}

class ImageTrailVariant2 extends TrailBase {
  render() {
    if (!this.running) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 0.4,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        },
        0
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2.8, filter: "brightness(250%)" },
        {
          duration: 0.4,
          ease: "power1",
          scale: 1,
          filter: "brightness(100%)",
        },
        0
      )
      .to(
        img.DOM.el,
        { duration: 0.4, ease: "power2", opacity: 0, scale: 0.2 },
        0.45
      );
  }
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const Cls = variantMap[variant] || variantMap[1];
    const instance = new Cls(containerRef.current);
    return () => instance.destroy && instance.destroy();
  }, [variant, items]);

  return (
    <div className="image-trail" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}
