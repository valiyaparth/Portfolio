import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { MarqueeComponent } from './features/marquee/marquee.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';

import { CustomCursorService } from './core/services/custom-cursor.service';
import { ScrollRevealService } from './core/services/scroll-reveal.service';
import { ActiveNavService } from './core/services/active-nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MarqueeComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cursorDot', { static: true }) cursorDot!: ElementRef<HTMLElement>;
  @ViewChild('cursorRing', { static: true }) cursorRing!: ElementRef<HTMLElement>;

  constructor(
    private el: ElementRef,
    private cursorService: CustomCursorService,
    private scrollRevealService: ScrollRevealService,
    private activeNavService: ActiveNavService,
  ) {}

  ngAfterViewInit(): void {
    this.cursorService.init(
      this.cursorDot.nativeElement,
      this.cursorRing.nativeElement,
    );

    // Delay slightly to ensure all child components are rendered
    setTimeout(() => {
      this.cursorService.registerHoverTargets(this.el.nativeElement);
      this.scrollRevealService.init(this.el.nativeElement);
    }, 100);

    this.activeNavService.init();
  }

  ngOnDestroy(): void {
    this.cursorService.destroy();
    this.scrollRevealService.destroy();
    this.activeNavService.destroy();
  }
}
