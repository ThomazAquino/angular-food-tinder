import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch : 'full', redirectTo: 'swipe'},
  { path: 'swipe', loadChildren: () => import('./features/swipe/swipe.module').then((m) => m.SwipeModule) },
  { path: 'like-history', loadChildren: () => import('./features/like-history/like-history.module').then((m) => m.LikeHistoryModule) },
  { path: 'machines', loadChildren: () => import('./features/machines/machines.module').then((m) => m.MachinesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
