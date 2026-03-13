import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CustomCursorService {
  private dot: HTMLElement | null = null;
  private ring: HTMLElement | null = null;
  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animationFrameId: number | null = null;
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  init(dot: HTMLElement, ring: HTMLElement): void {
    if (!this.isBrowser) return;

    this.dot = dot;
    this.ring = ring;

    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mousedown', this.onMouseDown);
      document.addEventListener('mouseup', this.onMouseUp);
      this.animate();
    });
  }

  registerHoverTargets(container: HTMLElement): void {
    if (!this.isBrowser || !this.ring) return;

    const selectors =
      'a, button, .btn, .proj-card, .hstat, .chip, .sk-item, .cinfo-item, .soc-btn, .stk';
    const elements = container.querySelectorAll(selectors);

    elements.forEach((el) => {
      el.addEventListener('mouseenter', this.onHoverEnter);
      el.addEventListener('mouseleave', this.onHoverLeave);
    });
  }

  destroy(): void {
    if (!this.isBrowser) return;

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private onMouseMove = (e: MouseEvent): void => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    if (this.dot) {
      this.dot.style.left = `${this.mouseX}px`;
      this.dot.style.top = `${this.mouseY}px`;
    }
  };

  private onMouseDown = (): void => {
    if (this.ring) {
      this.ring.style.transform = 'translate(-50%,-50%) scale(.7)';
    }
  };

  private onMouseUp = (): void => {
    if (this.ring) {
      this.ring.style.transform = '';
    }
  };

  private onHoverEnter = (): void => {
    this.ring?.classList.add('big');
  };

  private onHoverLeave = (): void => {
    this.ring?.classList.remove('big');
  };

  private animate = (): void => {
    this.ringX += (this.mouseX - this.ringX) * 0.11;
    this.ringY += (this.mouseY - this.ringY) * 0.11;

    if (this.ring) {
      this.ring.style.left = `${this.ringX}px`;
      this.ring.style.top = `${this.ringY}px`;
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
