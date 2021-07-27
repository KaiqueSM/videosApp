import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OSenhorDasArmasPage } from './o-senhor-das-armas.page';

const routes: Routes = [
  {
    path: '',
    component: OSenhorDasArmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OSenhorDasArmasPageRoutingModule {}
