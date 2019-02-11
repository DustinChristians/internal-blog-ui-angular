import { Component, OnInit } from '@angular/core';
import { ListGroupService } from './shared/list-group/list-group.service';
import { IListGroupItem } from './shared/list-group-item/list-group-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  categories: IListGroupItem[] = [];

  constructor(private listGroupService: ListGroupService) {
  }

  heroImageAlt = 'Angular Logo';
  heroImageSrc = '/assets/images/angular-logo.svg';
  heroHeading = 'My Notes';
  heroSummary = 'A software development notebook.';

  ngOnInit(): void {
    this.categories = this.listGroupService.getListGroups();
  }
}
