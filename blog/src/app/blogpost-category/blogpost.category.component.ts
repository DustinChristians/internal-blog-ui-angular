import { Component, OnInit } from '@angular/core';
import { IListGroupItem } from '../shared/list-group-item/list-group-item';
import { ContentService, Entry } from '../core/content/content.service';
import { CmsHeroImage } from '../core/models/cms/hero/cms.hero.image';
import { CmsImage } from '../core/models/cms/image/cms.image';
import { HeroSection } from '../shared/hero-section/hero-section.model';
import { ActivatedRoute } from '@angular/router';
import { CmsMap } from '../core/cms/cms.map';
import { CmsBlogPost } from '../core/models/cms/blogpost/cms.blogpost';
import { ErrorService } from '../core/error/error.service';

@Component({
  selector: 'app-blogpost.category',
  templateUrl: './blogpost.category.component.html',
  styleUrls: ['./blogpost.category.component.scss']
})
export class BlogpostCategoryComponent implements OnInit {
  blogPosts: IListGroupItem[] = [];
  heroSection: HeroSection = new HeroSection();
  errorMessage = '';

  constructor(
    private contentService: ContentService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getEntry();
    this.getBlogPosts();
  }

  private async getEntry() {
    this.contentService.contentApiService
      .getEntryBySlugAndType(
        this.route.snapshot.params.category,
        CmsMap.types.blogPostCategory
      )
      .then(
        entry => {
          if (!this.errorService.isEntryError(entry)) {
            this.populateCategory(entry);
          }
        },
        error => (this.errorMessage = error as any)
      );
  }

  private async getBlogPosts() {
    this.contentService.contentApiService
      .getBlogPosts(this.route.snapshot.params.category)
      .then(
        entries => this.populateBlogPosts(entries),
        error => (this.errorMessage = error as any)
      );
  }

  private populateCategory(entry: Entry<any>) {
    if (entry.fields.heroImage) {
      this.populateHero(entry.fields.heroImage);
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

  private populateBlogPosts(blogPosts: Array<CmsBlogPost>) {
    blogPosts.forEach(blogPost =>
      this.blogPosts.push({
        description: blogPost.fields.description,
        heading: blogPost.fields.title,
        path: '/blogpost/' + blogPost.fields.slug
      })
    );
  }
}
