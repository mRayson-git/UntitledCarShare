import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidesRoutingModule } from './rides-routing.module';
import { ListRideComponent } from './components/list-ride/list-ride.component';
import { FindRideComponent } from './components/find-ride/find-ride.component';


@NgModule({
  declarations: [
  
    ListRideComponent,
       FindRideComponent
  ],
  imports: [
    CommonModule,
    RidesRoutingModule
  ]
})
export class RidesModule { }
