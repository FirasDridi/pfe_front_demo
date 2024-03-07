import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent {
  @Input() title: string = '';
  @ViewChild('sidenav') sidenav!: MatSidenavModule;
}
