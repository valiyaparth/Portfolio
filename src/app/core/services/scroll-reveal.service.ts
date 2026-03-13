import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;
  private staggerObservers: IntersectionObserver[] = [];
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  init(container: HTMLElement): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.setupRevealObserver(container);
      this.setupStaggeredReveals(container);
    });
  }

  private setupRevealObserver(container: HTMLElement): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
          }
        });
      },
      { threshold: 0.1 },
    );

    container
      .querySelectorAll('.reveal, .reveal-l, .reveal-r')
      .forEach((el) => this.observer!.observe(el));
  }

  private setupStaggeredReveals(container: HTMLElement): void {
    container
      .querySelectorAll('.proj-card, .exp-row, .sk-col')
      .forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(20px)';
        htmlEl.style.transition = `opacity .6s ${i * 0.1}s, transform .6s ${i * 0.1}s`;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0)';
              observer.disconnect();
            }
          },
          { threshold: 0.1 },
        );

        observer.observe(htmlEl);
        this.staggerObservers.push(observer);
      });
  }

  destroy(): void {
    this.observer?.disconnect();
    this.staggerObservers.forEach((o) => o.disconnect());
    this.staggerObservers = [];
  }
}
