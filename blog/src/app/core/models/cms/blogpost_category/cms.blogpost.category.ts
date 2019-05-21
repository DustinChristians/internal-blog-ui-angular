import { CmsBlogPostCategoryFields } from './cms.blogpost.category.fields';
import { Sys } from 'contentful';

export interface CmsBlogPostCategory {
  sys: Sys;
  fields: CmsBlogPostCategoryFields;
}
