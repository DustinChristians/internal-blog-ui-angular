import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BlogpostComponent } from './blogpost.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundModule } from '../not-found/not-found.module';

const routes: Routes = [{ path: ':blogpost', component: BlogpostComponent }];

@NgModule({
  declarations: [BlogpostComponent],
  imports: [
    CommonModule,
    NotFoundModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogpostModule {}
