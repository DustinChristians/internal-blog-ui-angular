import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-one',
  templateUrl: './heading-one.component.html',
  styleUrls: ['./heading-one.component.scss']
})
export class HeadingOneComponent {
  @Input() heading: string;
}
