import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { Module1RoutingModule } from './module1.routing';
import { Module1Page1Component }   from './module1page1.component';
import { Module1Page2Component }   from './module1page2.component';


@NgModule({
  imports:      [ Module1RoutingModule ],
  declarations: [ Module1Page1Component, Module1Page2Component ],
})
export class Module1Module { }
