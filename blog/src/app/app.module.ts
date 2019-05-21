import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BlogpostCategoryModule } from './blogpost-category/blogpost.category.module';
import { BlogpostCategoryComponent } from './blogpost-category/blogpost.category.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostModule } from './blogpost/blogpost.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [BlogpostCategoryComponent, BlogpostComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    NotFoundModule,
    AppRoutingModule,
    RouterModule,
    BlogpostCategoryModule,
    BlogpostModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
