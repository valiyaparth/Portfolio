import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

  /** Track which categories are expanded (by index). On desktop all show; on mobile toggle. */
  expandedCategories = new Set<number>();

  private readonly isMobile: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isMobile =
      isPlatformBrowser(platformId) && window.innerWidth <= 960;

    // On desktop, expand all by default
    if (!this.isMobile) {
      this.skillCategories.forEach((_, i) => this.expandedCategories.add(i));
    } else {
      // On mobile, expand the first category by default
      this.expandedCategories.add(0);
    }
  }

  toggleCategory(index: number): void {
    if (this.expandedCategories.has(index)) {
      this.expandedCategories.delete(index);
    } else {
      this.expandedCategories.add(index);
    }
  }

  isCategoryExpanded(index: number): boolean {
    return this.expandedCategories.has(index);
  }
}
