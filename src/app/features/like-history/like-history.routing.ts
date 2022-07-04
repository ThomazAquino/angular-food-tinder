import { Route } from '@angular/router';
import { LikeHistoryContainerComponent } from './like-history-container.component';
import { LikeHistoryListComponent } from './list/like-history-list.component';

export const likeHistoryRoutes: Route[] = [
  {
    path: '',
    component: LikeHistoryContainerComponent,
    children: [
      {
        path: '',
        component: LikeHistoryListComponent,
      },
    ],
  },
];
