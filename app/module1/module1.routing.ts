import { NgModule }            from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1Page1Component }   from './module1page1.component';
import { Module1Page2Component }   from './module1page2.component';

const routes: Routes = [
    { path: 'page1', component: Module1Page1Component },
    { path: 'page2', component: Module1Page2Component },
    { path: '', redirectTo: 'page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}
