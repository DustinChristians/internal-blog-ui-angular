import { Sys } from 'contentful';
import { CmsAuthorFields } from './cms.author.fields';

export interface CmsAuthor {
  sys: Sys;
  fields: CmsAuthorFields;
}
