import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-six',
  templateUrl: './heading-six.component.html',
  styleUrls: ['./heading-six.component.scss']
})
export class HeadingSixComponent {
  @Input() heading: string;
}
