import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { PROJECTS } from '../../core/constants/portfolio-data.constants';
import { Project } from '../../core/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DecimalPipe, SectionHeaderComponent, ImgFallbackDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;
}
