import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BlogpostComponent } from './blogpost.component';

@NgModule({
  declarations: [BlogpostComponent],
  imports: [CommonModule, SharedModule]
})
export class BlogpostModule {}
