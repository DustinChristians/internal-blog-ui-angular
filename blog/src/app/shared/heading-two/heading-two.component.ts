import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-two',
  templateUrl: './heading-two.component.html',
  styleUrls: ['./heading-two.component.scss']
})
export class HeadingTwoComponent {
  @Input() heading: string;
}
