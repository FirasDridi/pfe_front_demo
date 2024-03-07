import { MatListModule,  } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { AllServiceComponent } from './all-service/all-service.component';
import { DashboredComponent } from './dashbored.component';
import { InitComponent } from './init/init.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppModule } from '../app.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DashboredComponent,
    InitComponent,
    AddServiceComponent,
    AllServiceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,MatListModule,MatExpansionModule,MatFormFieldModule,MatSelectModule,MatTableModule,MatCheckboxModule

  ],
})
export class DashboredModule {}
