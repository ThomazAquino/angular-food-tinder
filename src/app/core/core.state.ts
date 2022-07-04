import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { foodReducer, FoodState } from './_state/food.reducer';

export const reducers: ActionReducerMap<AppState> = {
  food: foodReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage,
];

export const selectFoodState = createFeatureSelector<AppState, FoodState>(
  'food'
);

export interface AppState {
  food: FoodState;
}
