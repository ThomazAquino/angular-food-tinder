import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LikeHistoryContainerComponent } from './like-history-container.component';
import { likeHistoryRoutes } from './like-history.routing';
import { LikeHistoryListComponent } from './list/like-history-list.component';



@NgModule({
  declarations: [
    LikeHistoryContainerComponent,
    LikeHistoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(likeHistoryRoutes),
  ]
})
export class LikeHistoryModule { }
