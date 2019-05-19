import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section-summary',
  templateUrl: './hero-section-summary.component.html',
  styleUrls: ['./hero-section-summary.component.scss']
})
export class HeroSectionSummaryComponent {
  @Input() summary: string;
}
