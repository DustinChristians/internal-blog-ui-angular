import { CmsImage } from '../image/cms.image';

export interface CmsAuthorFields {
  name: string;
  title: string;
  company: string;
  shortBio: string;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
  github: string;
  image: CmsImage;
}
