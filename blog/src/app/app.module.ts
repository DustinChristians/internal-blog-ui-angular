import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { ListGroupComponent } from './shared/list-group/list-group.component';
import { ListGroupItemComponent } from './shared/list-group-item/list-group-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    ListGroupComponent,
    ListGroupItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
