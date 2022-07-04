import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FoodEntity } from '../../../core/_state/food.models';
import * as fromFood from '../../../core/_state/food.selectors';

@Component({
  selector: 'app-like-history-list',
  templateUrl: './like-history-list.component.html',
})
export class LikeHistoryListComponent {
  likedFoodsAlphabetically$: Observable<FoodEntity[]> = this.store.pipe(
    select(fromFood.getLikedFoodsAlphabetically)
  );

  constructor(private store: Store) {}
}
