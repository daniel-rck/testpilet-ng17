import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first/first.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'piral-ng/common';
import { Tile } from '../Tile';

@NgModule({
  imports: [SharedModule, BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, FirstPageComponent, Tile],
  exports: [AppComponent, Tile],
})
export class AppModule {}
