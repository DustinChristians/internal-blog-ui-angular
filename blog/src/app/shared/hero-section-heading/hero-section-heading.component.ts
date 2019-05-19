import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section-heading',
  templateUrl: './hero-section-heading.component.html',
  styleUrls: ['./hero-section-heading.component.scss']
})
export class HeroSectionHeadingComponent {
  @Input() heading: string;
}
