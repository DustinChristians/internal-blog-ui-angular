import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostCategoryComponent } from './blogpost.category.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':category', component: BlogpostCategoryComponent }
];

@NgModule({
  declarations: [BlogpostCategoryComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class BlogpostCategoryModule {}
