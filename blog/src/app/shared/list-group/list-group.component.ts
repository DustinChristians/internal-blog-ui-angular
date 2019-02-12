import { Component, OnInit, Input } from '@angular/core';
import { IListGroupItem } from '../list-group-item/list-group-item';
import { ListGroupService } from './list-group.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  @Input() listGroupItems: IListGroupItem[];

  constructor(private listGroupService: ListGroupService) { }

   ngOnInit() {

   }

}
