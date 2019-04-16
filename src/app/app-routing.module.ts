import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPComponent } from './Segmentos/cp/cp.component';
import { RHComponent } from './Segmentos/rh/rh.component';

const routes: Routes = [
  {
    path: 'cp', component: CPComponent
  },{
    path: 'rh', component: RHComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
