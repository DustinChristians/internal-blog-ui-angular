import { Injectable, Inject } from '@angular/core';
import { ContentApiService } from '../contentful/contentful.service';
import { IContentApiService } from './content-api.service';
import { mapping } from '../contentful/contentful.mapping';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public readonly mapping = mapping;

  constructor(
    @Inject(ContentApiService) public contentApiService: IContentApiService
  ) {}
}
