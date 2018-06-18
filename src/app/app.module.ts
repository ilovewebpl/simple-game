import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.modules';
import { AppRoutingModule } from './app-routing.module';

const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule.forRoot(),
];

@NgModule({
  declarations: [AppComponent],
  imports: modules,
  bootstrap: [AppComponent]
})
export class AppModule { }
