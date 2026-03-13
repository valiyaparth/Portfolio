import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NAV_SECTIONS } from '../../core/constants/portfolio-data.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navSections = NAV_SECTIONS;
  isMenuOpen = false;

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    if (!this.isBrowser) return;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
}
