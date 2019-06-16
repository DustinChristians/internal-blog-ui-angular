import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { HeadingFiveComponent } from './heading-five/heading-five.component';
import { HeadingOneComponent } from './heading-one/heading-one.component';
import { HeadingTwoComponent } from './heading-two/heading-two.component';
import { HeadingThreeComponent } from './heading-three/heading-three.component';
import { HeadingFourComponent } from './heading-four/heading-four.component';
import { HeadingSixComponent } from './heading-six/heading-six.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroSectionHeadingComponent } from './hero-section-heading/hero-section-heading.component';
import { HeroSectionSummaryComponent } from './hero-section-summary/hero-section-summary.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListGroupItemComponent } from './list-group-item/list-group-item.component';
import { RouterModule } from '@angular/router';
import { MarkdownToHtmlPipe } from './pipes/markdown-to-html/markdown-to-html.pipe';

@NgModule({
  declarations: [
    DescriptionComponent,
    HeadingOneComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    HeadingFourComponent,
    HeadingFiveComponent,
    HeadingSixComponent,
    HeroSectionComponent,
    HeroSectionHeadingComponent,
    HeroSectionSummaryComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    MarkdownToHtmlPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DescriptionComponent,
    HeadingOneComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    HeadingFourComponent,
    HeadingFiveComponent,
    HeadingSixComponent,
    HeroSectionComponent,
    HeroSectionHeadingComponent,
    HeroSectionSummaryComponent,
    ListGroupComponent,
    ListGroupItemComponent,
    MarkdownToHtmlPipe
  ]
})
export class SharedModule {}
