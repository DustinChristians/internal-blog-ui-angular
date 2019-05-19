import { Injectable, Inject } from '@angular/core';
import { ContentApiService } from '../contentful/contentful.service';
import { IContentApiService } from './content-api.service';
export { Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(
    @Inject(ContentApiService) public contentApiService: IContentApiService
  ) {}
}
