import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MachineDetailComponent } from './detail/machine-detail.component';
import { MachinesContainerComponent } from './machines-container.component';
import { machinesRoutes } from './machines.routing';



@NgModule({
  declarations: [
    MachinesContainerComponent,
    MachineDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(machinesRoutes),
  ]
})
export class MachinesModule { }
