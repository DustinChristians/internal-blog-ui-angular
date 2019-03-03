import { Entry } from 'contentful';

export interface IContentApiService {
  getEntryByType(type, query?: object): Promise<Entry<any>[]>;
  getEntryById(entryId): Promise<Entry<any>>;
  getEntryBySlugAndType(slug, type, query?: object): Promise<Entry<any>[]>;
}
