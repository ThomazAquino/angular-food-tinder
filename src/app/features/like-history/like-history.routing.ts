import { Route } from '@angular/router';
import { LikeHistoryContainerComponent } from './like-history-container.component';
import { LikeHistoryListComponent } from './list/like-history-list.component';

export const likeHistoryRoutes: Route[] = [
    {
        path     : '',
        component: LikeHistoryContainerComponent,
        children : [
            {
                path     : '',
                component: LikeHistoryListComponent,
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
