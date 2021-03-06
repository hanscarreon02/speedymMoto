import { ProfileComponent } from './profile/profile.component';
import { RiderListComponent } from './rider-list/rider-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidersPage } from './riders.page';

const routes: Routes = [
  {
    path: '',
    component: RidersPage,
    children:[
      {
        path: "",
        component: RiderListComponent
      },
      {
        path:"profile",
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidersPageRoutingModule {}
