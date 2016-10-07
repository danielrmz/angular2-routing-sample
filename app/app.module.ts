import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AppRoutingModule }   from './app.routing';

//import { Module1Module } from './module1/module1.module';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  imports:      [ 
        BrowserModule,
        // Module1Module,
        AppRoutingModule
   ],
  declarations: [ AppComponent, PageNotFoundComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
