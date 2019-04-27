import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContentService } from '../core/content/content.service';
import { mapping } from '../core/contentful/contentful.mapping';
import { CmsRouteFields } from '../core/models/cms/route/cms.route.fields';

@Component({
  selector: 'app-default-component',
  template: `
    <div></div>
  `
})
export class DefaultComponent implements OnInit {
  private component;
  private instance;
  private routeFields: CmsRouteFields;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private contentService: ContentService,
    private router: Router,
    private viewContainerRef: ViewContainerRef
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.getComponent();
    this.setComponent();
  }

  getComponent() {
    this.routeFields = window.history.state;

    const componentData = mapping.components.find(
      component => component.contentType === this.routeFields.contentType
    );

    if (componentData != null) {
      this.component = componentData.component;

      this.contentService.contentApiService
        .getEntryById(this.routeFields.contentID)
        .then(entry =>
          // TODO: pass the entry to the new component
          console.log(entry)
        );
    }
  }

  setComponent() {
    if (!this.component) {
      this.component = NotFoundComponent;
    }

    if (this.instance) {
      this.instance.destroy();
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.component
    );
    this.viewContainerRef.clear();
    this.instance = this.viewContainerRef.createComponent(componentFactory);
  }
}
