import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-four',
  templateUrl: './heading-four.component.html',
  styleUrls: ['./heading-four.component.scss']
})
export class HeadingFourComponent {
  @Input() heading: string;
}
