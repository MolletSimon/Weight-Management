import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IMCPage } from './imc.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { IMCPageRoutingModule } from './imc-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IMCPageRoutingModule
  ],
  declarations: [IMCPage]
})
export class IMCPageModule {}
