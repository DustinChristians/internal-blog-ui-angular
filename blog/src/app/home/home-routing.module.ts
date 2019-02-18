import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

// TODO: Change the child routes to use their proper component when they are finished
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'angular', component: HomeComponent },
      { path: 'architecture', component: HomeComponent },
      { path: 'career', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
