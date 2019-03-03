import { Component, OnInit } from '@angular/core';
import { IListGroupItem } from '../shared/list-group-item/list-group-item';
import { ListGroupService } from '../shared/list-group/list-group.service';
import { ContentService } from '../core/content/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: IListGroupItem[] = [];
  errorMessage = '';
  heroImageAlt = 'Angular Logo';
  heroImageSrc = '/assets/images/angular-logo.svg';
  heroHeading = 'My Notes';
  heroSummary = 'A software development notebook.';
  private categoriesUrl = '/api/categories/category-groups.json';

  constructor(
    private contentService: ContentService,
    private listGroupService: ListGroupService
  ) {}

  ngOnInit() {
    this.listGroupService.getListGroups(this.categoriesUrl).subscribe(
      listGroupItems => {
        this.categories = listGroupItems;
      },
      error => (this.errorMessage = error as any)
    );

    this.contentService.contentApiService
      .getEntryByType(this.contentService.mapping.types.home)
      .then(
        items => console.log(items),
        error => (this.errorMessage = error as any)
      );
  }
}
