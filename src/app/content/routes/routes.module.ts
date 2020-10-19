import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import {AppComponent} from '../app/app.component';
import {MainComponent} from '../main/main.component';
import {ListComponent} from '../list/list.component';
import {ItemComponent} from '../item/item.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ AppComponent,
    MainComponent,
    ListComponent,
    ItemComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatButtonModule
  ],
  exports: [AppComponent,
    MainComponent,
    ListComponent,
    ItemComponent,
  RoutesRoutingModule]
})
export class RoutesModule { }
