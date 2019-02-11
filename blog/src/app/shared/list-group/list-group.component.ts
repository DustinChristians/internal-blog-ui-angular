import { Component, OnInit, Input } from '@angular/core';
import { IListGroupItem } from '../list-group-item/list-group-item';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Input() listGroupItems: IListGroupItem;

  constructor() { }

  ngOnInit() {
  }

}
