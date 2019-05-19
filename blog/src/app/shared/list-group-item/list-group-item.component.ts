import { Component, Input } from '@angular/core';
import { IListGroupItem } from './list-group-item';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss']
})
export class ListGroupItemComponent {
  @Input() listGroupItem: IListGroupItem;
}
