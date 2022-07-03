import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { SwipeListComponent } from './list/swipe-list.component';
import { SwipeContainerComponent } from './swipe-container.component';
import { swipeRoutes } from './swipe.routing';

@NgModule({
  declarations: [
    SwipeContainerComponent,
    SwipeListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(swipeRoutes),
    DragDropModule,
    IconsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    SharedModule
  ],
})
export class SwipeModule {}
