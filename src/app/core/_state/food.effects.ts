import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { SwipeService } from '../../features/swipe/swipe.service';
import { selectFoodState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';

import * as FoodActions from './food.actions';
import { FOOD_FEATURE_KEY } from './food.reducer';

@Injectable()
export class FoodEffects {
  ngrxOnInitEffects(): any {
    return FoodActions.loadFood();
  }

  loadFoodList = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FoodActions.loadFood),
        switchMap(() => {
          return this.swipeService.getFoods().pipe(
            switchMap((response: any) => {
              return [FoodActions.loadFoodSuccess({ foodList: response })];
            }),
            catchError((err) => of(FoodActions.loadFoodFailure({ error: err })))
          );
        }),
        catchError((err) => of(FoodActions.loadFoodFailure({ error: err })))
      ),
    { dispatch: true }
  );

  resetFoodList = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FoodActions.resetFoodList),
        switchMap(() => {
          return this.swipeService.getFoods().pipe(
            switchMap((response: any) => {
              return [FoodActions.loadFoodSuccess({ foodList: response })];
            }),
            catchError((err) => of(FoodActions.loadFoodFailure({ error: err })))
          );
        }),
        catchError((err) => of(FoodActions.loadFoodFailure({ error: err })))
      ),
    { dispatch: true }
  );

  persistFood = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FoodActions.loadFoodSuccess, FoodActions.likeFood),
        withLatestFrom(this.store.pipe(select(selectFoodState))),
        tap(([action, food]) =>
          this.localStorageService.setItem(FOOD_FEATURE_KEY, food)
        )
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private swipeService: SwipeService,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}
}
