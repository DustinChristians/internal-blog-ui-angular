import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { NotFoundModule } from '../not-found/not-found.module';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  declarations: [DefaultComponent],
  entryComponents: [NotFoundComponent],
  imports: [CommonModule]
})
export class DefaultModule {}
