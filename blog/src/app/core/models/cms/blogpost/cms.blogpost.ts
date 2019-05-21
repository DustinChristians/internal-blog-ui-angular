import { Sys } from 'contentful';
import { CmsBlogPostFields } from './cms.blogpost.fields';

export interface CmsBlogPost {
  sys: Sys;
  fields: CmsBlogPostFields;
}
