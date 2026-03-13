import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SKILL_CATEGORIES } from '../../core/constants/portfolio-data.constants';
import { SkillCategory } from '../../core/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillCategories: SkillCategory[] = SKILL_CATEGORIES;
}
