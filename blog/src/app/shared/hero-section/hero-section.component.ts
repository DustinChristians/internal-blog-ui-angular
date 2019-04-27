import { Component, OnInit, Input } from '@angular/core';
import { HeroSection } from './hero-section.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() heroSection: HeroSection;
}
