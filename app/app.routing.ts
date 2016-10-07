import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { Module1Module } from './module1/module1.module';

export const routes: Routes = [
    { path: 'module1', loadChildren: 'app/module1/module1.module#Module1Module' },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}