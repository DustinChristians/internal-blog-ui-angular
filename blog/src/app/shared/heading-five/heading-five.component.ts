import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-five',
  templateUrl: './heading-five.component.html',
  styleUrls: ['./heading-five.component.scss']
})
export class HeadingFiveComponent {
  @Input() heading: string;
}
