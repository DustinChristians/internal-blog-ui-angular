import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { ListGroupComponent } from './shared/list-group/list-group.component';
import { ListGroupItemComponent } from './shared/list-group-item/list-group-item.component';
import { HeadingOneComponent } from './shared/heading-one/heading-one.component';
import { HeadingTwoComponent } from './shared/heading-two/heading-two.component';
import { HeadingThreeComponent } from './shared/heading-three/heading-three.component';
import { HeadingFourComponent } from './shared/heading-four/heading-four.component';
import { HeadingFiveComponent } from './shared/heading-five/heading-five.component';
import { HeadingSixComponent } from './shared/heading-six/heading-six.component';
import { DescriptionComponent } from './shared/description/description.component';
import { HeroSectionSummaryComponent } from './shared/hero-section-summary/hero-section-summary.component';
import { HeroSectionHeadingComponent } from './shared/hero-section-heading/hero-section-heading.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    HeadingOneComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    HeadingFourComponent,
    HeadingFiveComponent,
    HeadingSixComponent,
    DescriptionComponent,
    HeroSectionSummaryComponent,
    HeroSectionHeadingComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
