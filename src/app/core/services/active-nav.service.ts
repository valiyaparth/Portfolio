import { Injectable, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ActiveNavService {
  private readonly sectionIds = ['about', 'projects', 'experience', 'skills', 'contact'];
  private scrollHandler: (() => void) | null = null;
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  init(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.scrollHandler = () => this.updateActiveNav();
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    });
  }

  private updateActiveNav(): void {
    const scrollPos = window.scrollY + 120;

    this.sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const link = document.querySelector(`.nav-ul a[href="#${id}"]`);
      if (!link) return;

      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  destroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }
  }
}
