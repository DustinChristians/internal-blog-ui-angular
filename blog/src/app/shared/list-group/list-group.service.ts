import { Injectable } from '@angular/core';
import { IListGroupItem } from '../list-group-item/list-group-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from 'src/app/core/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class ListGroupService {
  constructor(private errorService: ErrorService, private http: HttpClient) {}

  getListGroups(url: string): Observable<IListGroupItem[]> {
    return this.http
      .get<IListGroupItem[]>(url)
      .pipe(catchError(this.errorService.handleError));
  }
}
