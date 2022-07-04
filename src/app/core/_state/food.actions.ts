import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { FoodEntity } from './food.models';

export const init = createAction('[Swipe Page] Init');

export const loadFood = createAction('[Food/API] Load Food List');

export const loadFoodSuccess = createAction(
  '[Food/API] Load Food Success',
  props<{ foodList: FoodEntity[] }>()
);

export const loadFoodFailure = createAction(
  '[Food/API] Load Food Failure',
  props<{ error: any }>()
);

export const likeFood = createAction(
  '[Food/API] Like Food',
  props<{ food: Update<FoodEntity> }>()
);

export const resetFoodList = createAction('[Food/API] Reset Food List');
