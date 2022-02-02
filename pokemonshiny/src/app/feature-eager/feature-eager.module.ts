import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureEagerRoutingModule } from './feature-eager-routing.module';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';


@NgModule({
  declarations: [

    PokeDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureEagerRoutingModule
  ],
  exports:[
    PokeDetailComponent
  ]
})
export class FeatureEagerModule { }
