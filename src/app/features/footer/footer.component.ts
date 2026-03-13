import { Component } from '@angular/core';
import { FOOTER_LINKS } from '../../core/constants/portfolio-data.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly footerLinks = FOOTER_LINKS;
}
