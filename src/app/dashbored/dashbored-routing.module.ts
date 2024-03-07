import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredComponent } from './dashbored.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AllServiceComponent } from './all-service/all-service.component';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  {
    path: '',
    component: DashboredComponent,
    children: [
      { path: '', component: InitComponent },
      { path: 'addservice', component: AddServiceComponent },
      { path: 'allservice', component: AllServiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboredRoutingModule {}
