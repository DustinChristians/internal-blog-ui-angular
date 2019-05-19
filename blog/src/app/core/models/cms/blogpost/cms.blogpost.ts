import { Sys } from 'contentful';
import { BlogPostFields } from './cms.blogpost.fields';

export interface BlogPost {
  sys: Sys;
  fields: BlogPostFields;
}
