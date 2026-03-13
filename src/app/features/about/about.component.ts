import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { ABOUT_CHIPS } from '../../core/constants/portfolio-data.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, ImgFallbackDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly aboutChips = ABOUT_CHIPS;

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.parentElement!.style.background = '#ffe135';
  }
}
