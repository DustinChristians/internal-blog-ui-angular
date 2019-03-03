import { Entry } from 'contentful';

export interface ICmsApiService {
  getEntryByCategory(category, query?: object): Promise<Entry<any>[]>;
  getEntryById(entryId): Promise<Entry<any>>;
  getEntryBySlugAndType(slug, type, query?: object): Promise<Entry<any>[]>;
}
