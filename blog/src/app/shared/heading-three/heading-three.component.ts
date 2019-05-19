import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-three',
  templateUrl: './heading-three.component.html',
  styleUrls: ['./heading-three.component.scss']
})
export class HeadingThreeComponent {
  @Input() heading: string;
}
