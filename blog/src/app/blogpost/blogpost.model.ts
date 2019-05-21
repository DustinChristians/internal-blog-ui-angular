import { CmsBlogPost } from '../core/models/cms/blogpost/cms.blogpost';
import { Sys } from 'contentful';
import { CmsBlogPostFields } from '../core/models/cms/blogpost/cms.blogpost.fields';

export class BlogPost implements CmsBlogPost {
  sys: Sys;
  fields: CmsBlogPostFields;
}
