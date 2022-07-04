import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as FoodActions from './food.actions';
import { FoodEntity } from './food.models';

export const FOOD_FEATURE_KEY = 'food';

export interface FoodState extends EntityState<FoodEntity> {
  selectedId?: string | number; // which Food record has been selected
  loaded: boolean; // has the Food list been loaded
  loading: boolean;
  error?: string | null; // last known error (if any)
}

export interface FoodPartialState {
  readonly [FOOD_FEATURE_KEY]: FoodState;
}

export const foodAdapter: EntityAdapter<FoodEntity> =
  createEntityAdapter<FoodEntity>();

export const initialState: FoodState = foodAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
});

const localReducer = createReducer(
  initialState,
  on(FoodActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(FoodActions.loadFood, (state) => ({ ...state, loaded: false, loading: true, error: null })),
  on(FoodActions.resetFoodList, (state) => ({ ...state, loaded: false, loading: true, error: null })),
  on(FoodActions.loadFoodSuccess, (state, { foodList }) =>
    foodAdapter.setAll(foodList, { ...state, loading: false, loaded: true })
  ),
  on(FoodActions.loadFoodFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(FoodActions.likeFood, (state, { food }) =>
    foodAdapter.updateOne(food, state)
  )
);

export function foodReducer(state: FoodState | undefined, action: Action) {
  return localReducer(state, action);
}
