import { CmsHeroImageFields } from './cms.hero.image.fields';
import { Sys } from 'contentful';

export interface CmsHeroImage {
  fields: CmsHeroImageFields;
  sys: Sys;
}
