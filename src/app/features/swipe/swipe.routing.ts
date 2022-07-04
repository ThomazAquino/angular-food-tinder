import { Route } from '@angular/router';
import { SwipeListComponent } from './list/swipe-list.component';
import { SwipeContainerComponent } from './swipe-container.component';
import { FoodListResolver } from './swipe.resolver';

export const swipeRoutes: Route[] = [
  {
    path: '',
    component: SwipeContainerComponent,
    children: [
      {
        path: '',
        component: SwipeListComponent,
        resolve: {
          foodList: FoodListResolver,
        },
      },
    ],
  },
];
