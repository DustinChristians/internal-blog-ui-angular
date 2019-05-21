import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogpostCategoryComponent } from './blogpost-category/blogpost.category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':category', component: BlogpostCategoryComponent },
  { path: ':category/:blogpost', component: BlogpostComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
