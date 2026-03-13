import { Component } from '@angular/core';
import { NAV_SECTIONS } from '../../core/constants/portfolio-data.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navSections = NAV_SECTIONS;
}
