import { Injectable, InjectionToken } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { config } from './contentful.config';
import { IContentApiService } from '../content/content-api.service';

export const ContentApiService = new InjectionToken('ContentApiService', {
  providedIn: 'root',
  factory: () => new ContentfulService()
});

@Injectable()
export class ContentfulService implements IContentApiService {
  private contentDeliveryApiClient = createClient({
    space: config.space,
    accessToken: config.accessToken
  });

  constructor() {}

  async getEntryByType(type, query?: object): Promise<Entry<any>[]> {
    const result = await this.contentDeliveryApiClient.getEntries(
      Object.assign(
        {
          content_type: type
        },
        query
      )
    );
    return result.items;
  }

  async getEntryById(entryId): Promise<Entry<any>> {
    return await this.contentDeliveryApiClient.getEntry(entryId);
  }

  async getEntryBySlugAndType(
    slug,
    type,
    query?: object
  ): Promise<Entry<any>[]> {
    slug = slug.replace('/', '');
    console.log('slug: ' + slug);

    const result = await this.contentDeliveryApiClient.getEntries(
      Object.assign(
        {
          content_type: type,
          'fields.slug[match]': slug
        },
        query
      )
    );
    return result.items;
  }
}
