import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OSenhorDasArmasPageRoutingModule } from './o-senhor-das-armas-routing.module';

import { OSenhorDasArmasPage } from './o-senhor-das-armas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OSenhorDasArmasPageRoutingModule
  ],
  declarations: [OSenhorDasArmasPage]
})
export class OSenhorDasArmasPageModule {}
