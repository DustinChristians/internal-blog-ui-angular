import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CmsService } from '../core/cms/cms.service';

@Component({
  selector: 'app-default-component',
  template: `
    <div></div>
  `
})
export class DefaultComponent implements OnInit {
  private component;
  private instance;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cmsService: CmsService,
    private router: Router,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.getComponent();
    this.setComponent();
  }

  getComponent() {
    console.log(this.router.url);
    console.log(this.cmsService.cmsApiService.getEntryById(''));
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
