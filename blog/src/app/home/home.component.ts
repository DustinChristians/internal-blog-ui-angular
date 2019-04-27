import { Component, OnInit } from '@angular/core';
import { IListGroupItem } from '../shared/list-group-item/list-group-item';
import { ContentService, Entry } from '../core/content/content.service';
import { CmsHeroImage } from '../core/models/cms/hero/cms.hero.image';
import { CmsImage } from '../core/models/cms/image/cms.image';
import { BlogPostCategory } from '../core/models/cms/blogpost_category/cms.blogpost.category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: IListGroupItem[] = [];
  errorMessage = '';
  heroImageAlt = '';
  heroImageSrc = '';
  heroHeading = '';
  heroSummary = '';

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.contentApiService
      .getEntryByType(this.contentService.mapping.types.home)
      .then(
        entries => this.populate(entries),
        error => (this.errorMessage = error as any)
      );
  }

  private populate(entries: Entry<any>[]) {
    entries.forEach(entry => {
      this.populateHero(entry.fields.heroImage);
      this.populateCategories(entry.fields.blogPostCategories);
    });
  }

  private populateHero(heroImage: CmsHeroImage) {
    this.heroHeading = heroImage.fields.heading;
    this.heroSummary = heroImage.fields.summary;
    this.populateHeroImage(heroImage.fields.image);
  }

  private populateHeroImage(image: CmsImage) {
    this.heroImageAlt = image.fields.description;
    this.heroImageSrc = image.fields.file.url;
  }

  private populateCategories(blogPostCategories: Array<BlogPostCategory>) {
    blogPostCategories.forEach(category =>
      this.categories.push({
        contentID: category.sys.id,
        contentType: category.sys.contentType.sys.id,
        description: category.fields.description,
        heading: category.fields.title,
        path: category.fields.slug
      })
    );
  }
}
