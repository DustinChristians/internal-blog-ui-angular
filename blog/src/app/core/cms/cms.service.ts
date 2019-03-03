import { Injectable, Inject } from '@angular/core';
import { CmsApiService } from '../contentful/contentful.service';
import { ICmsApiService } from './cms-api.service';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  constructor(@Inject(CmsApiService) public cmsApiService: ICmsApiService) {}
}
