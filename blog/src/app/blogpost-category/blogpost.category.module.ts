import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostCategoryComponent } from './blogpost.category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogpostCategoryComponent],
  imports: [CommonModule, SharedModule]
})
export class BlogpostCategoryModule {}
