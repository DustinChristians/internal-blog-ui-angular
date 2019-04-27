import { CmsImageDetails } from '../image/cms.image.details';

export interface CmsFile {
  url: string;
  details: CmsImageDetails;
  fileName: string;
  contentType: string;
}
