import { Route } from '@angular/router';
import { MachineDetailComponent } from './detail/machine-detail.component';
import { MachinesContainerComponent } from './machines-container.component';

export const machinesRoutes: Route[] = [
  {
    path: '',
    component: MachinesContainerComponent,
    children: [
      {
        path: '',
        component: MachineDetailComponent,
      },
    ],
  },
];
