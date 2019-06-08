import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'category',
    loadChildren: () =>
      import('./blogpost-category/blogpost.category.module').then(
        m => m.BlogpostCategoryModule
      )
  },
  {
    path: 'blogpost',
    loadChildren: () =>
      import('./blogpost/blogpost.module').then(m => m.BlogpostModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
