import {
  Component,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HERO_STATS } from '../../core/constants/portfolio-data.constants';
import { TextScrambleService } from '../../core/services/text-scramble.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent implements AfterViewInit {
  readonly heroStats = HERO_STATS;

  readonly heroLines: { text: string; isStroke: boolean }[] = [
    { text: 'PARTH', isStroke: false },
    { text: 'VALIYA', isStroke: true },
    { text: 'DEV.', isStroke: false },
  ];

  private readonly isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private textScrambleService: TextScrambleService,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const heroLines = this.el.nativeElement.querySelectorAll('.hline');
    heroLines.forEach((line: HTMLElement) => {
      const originalText = line.textContent || '';
      line.addEventListener('mouseenter', () => {
        this.textScrambleService.scramble(line, originalText);
      });
    });
  }
}
