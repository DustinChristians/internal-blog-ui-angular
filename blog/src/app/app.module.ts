import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './default/default.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    NotFoundModule,
    AppRoutingModule,
    DefaultModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
