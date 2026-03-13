import { Component } from '@angular/core';
import { MARQUEE_ITEMS } from '../../core/constants/portfolio-data.constants';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
})
export class MarqueeComponent {
  readonly marqueeItems = MARQUEE_ITEMS;
}
