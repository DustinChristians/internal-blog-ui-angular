import { CmsHeroImage } from '../hero/cms.hero.image';
import { CmsBlogPostCategory } from '../blogpost_category/cms.blogpost.category';
import { CmsAuthor } from '../author/cms.author';

export interface CmsBlogPostFields {
  title: string;
  slug: string;
  category: CmsBlogPostCategory;
  heroImage: CmsHeroImage;
  description: string;
  body: string;
  author: CmsAuthor;
  publishDate: string;
  tags: string[];
}
