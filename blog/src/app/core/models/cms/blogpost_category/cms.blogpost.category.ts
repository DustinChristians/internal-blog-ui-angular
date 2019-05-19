import { BlogPostCategoryFields } from './cms.blogpost.category.fields';
import { Sys } from 'contentful';

export interface BlogPostCategory {
  sys: Sys;
  fields: BlogPostCategoryFields;
}
