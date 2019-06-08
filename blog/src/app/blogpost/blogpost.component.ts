import { Component, OnInit } from '@angular/core';
import { ContentService, Entry } from '../core/content/content.service';
import { ActivatedRoute } from '@angular/router';
import { CmsMap } from '../core/cms/cms.map';
import { HeroSection } from '../shared/hero-section/hero-section.model';
import { CmsHeroImage } from '../core/models/cms/hero/cms.hero.image';
import { CmsImage } from '../core/models/cms/image/cms.image';
import { BlogPost } from './blogpost.model';
import { ErrorService } from '../core/error/error.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  errorMessage: string;
  heroSection: HeroSection = new HeroSection();

  constructor(
    private contentService: ContentService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getEntry();
  }

  private async getEntry() {
    this.contentService.contentApiService
      .getEntryBySlugAndType(
        this.route.snapshot.params.blogpost,
        CmsMap.types.blogPost
      )
      .then(entry => {
        if (!this.errorService.isEntryError(entry)) {
          this.populateBlogPost(entry);
        }
      })
      .catch(error => {
        this.entryErrorHandler(error);
      });
  }

  private entryErrorHandler(error: any) {
    console.log('could not find data ' + error);
  }

  private populateBlogPost(entry: Entry<any>) {
    this.blogPost = entry;

    if (this.blogPost.fields.heroImage) {
      this.populateHero(this.blogPost.fields.heroImage);
    }
  }

  private populateHero(heroImage: CmsHeroImage) {
    this.heroSection.heading = heroImage.fields.heading;
    this.heroSection.summary = heroImage.fields.summary;
    this.populateHeroImage(heroImage.fields.image);
  }

  private populateHeroImage(image: CmsImage) {
    this.heroSection.alt = image.fields.description;
    this.heroSection.src = image.fields.file.url;
  }
}
