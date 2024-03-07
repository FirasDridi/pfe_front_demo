import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiManagerComponent } from './api-manager/api-manager.component';
import { HaederComponent } from './haeder/haeder.component';

const routes: Routes = [
  { path: 'api-manager', component: ApiManagerComponent },
  {
    path: 'dash',
    loadChildren: () =>
      import('./dashbored/dashbored.module').then(
        (x) => x.DashboredModule
      ),
  },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
