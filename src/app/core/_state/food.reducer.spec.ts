import { Action } from '@ngrx/store';

import * as FoodActions from './food.actions';
import { FoodEntity } from './food.models';
import { foodReducer, FoodState, initialState } from './food.reducer';

describe('Food Reducer', () => {
  const createFoodEntity = (id: string, name = ''): FoodEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Food actions', () => {
    it('loadFoodSuccess should return the list of known Food', () => {
      const food = [
        createFoodEntity('PRODUCT-AAA'),
        createFoodEntity('PRODUCT-zzz'),
      ];
      const action = FoodActions.loadFoodSuccess({ food });

      const result: FoodState = foodReducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = foodReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
