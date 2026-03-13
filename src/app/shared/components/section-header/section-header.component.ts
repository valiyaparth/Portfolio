import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sec-head reveal">
      <span class="sec-num">{{ sectionNumber }} /</span>
      <h2 class="sec-title" [innerHTML]="titleHtml"></h2>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input({ required: true }) sectionNumber!: string;
  @Input({ required: true }) titleHtml!: string;
}
