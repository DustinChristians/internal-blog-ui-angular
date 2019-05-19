import { CmsHeroImage } from '../hero/cms.hero.image';

export interface BlogPostFields {
  title: string;
  slug: string;
  category: string;
  description: string;
  heroImage: CmsHeroImage;
  body: string;
  author: string;
  publishDate: string;
  tags: string;
}
