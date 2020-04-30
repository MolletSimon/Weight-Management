import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeightPage } from './weight.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WeightPageRoutingModule } from './weight-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WeightPageRoutingModule
  ],
  declarations: [WeightPage]
})
export class WeightPageModule {}
