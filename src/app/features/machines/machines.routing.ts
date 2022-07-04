import { Route } from '@angular/router';
import { MachineDetailComponent } from './detail/machine-detail.component';
import { MachinesContainerComponent } from './machines-container.component';

export const machinesRoutes: Route[] = [
    {
        path     : '',
        component: MachinesContainerComponent,
        children : [
            {
                path     : '',
                component: MachineDetailComponent,
                // resolve  : {
                //     foodList : FoodListResolver,
                // },
                // children : [
                //     {
                //         path         : ':id',
                //         component    : ContactsDetailsComponent,
                //         resolve      : {
                //             contact  : ContactsContactResolver,
                //             countries: ContactsCountriesResolver
                //         },
                //         canDeactivate: [CanDeactivateContactsDetails]
                //     }
                // ]
            }
        ]
    }
];
