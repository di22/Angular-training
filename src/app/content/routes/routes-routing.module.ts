import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../main/main.component';
import {AppComponent} from '../app/app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'content/main', component: MainComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
