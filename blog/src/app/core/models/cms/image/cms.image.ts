import { Sys } from 'contentful';
import { CmsImageFields } from './cms.image.fields';

export interface CmsImage {
  fields: CmsImageFields;
  sys: Sys;
}
