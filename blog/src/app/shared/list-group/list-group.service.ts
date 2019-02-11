import { Injectable } from '@angular/core';
import { IListGroupItem } from '../list-group-item/list-group-item';

@Injectable({
  providedIn: 'root'
})
export class ListGroupService {
  getListGroups(): IListGroupItem[] {
    return [
      {
        description: 'All about software architecture.',
        heading: 'Architecture',
        path: '/architecure'
      },
      {
        description: 'Information about a software development career.',
        heading: 'Career',
        path: '/career'
      },
      {
        description: 'Information about the Angular framework.',
        heading: 'Angular',
        path: '/angular'
      }
    ];
  }
}
