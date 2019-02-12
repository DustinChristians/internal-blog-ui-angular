import { Injectable } from '@angular/core';
import { IListGroupItem } from '../list-group-item/list-group-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListGroupService {
  private groupListItemsUrl = '/api/categories/categorygroups.json';

  constructor(private http: HttpClient) {}

  getListGroups(): Observable<IListGroupItem[]> {
    return this.http.get<IListGroupItem[]>(this.groupListItemsUrl);
  }
}
