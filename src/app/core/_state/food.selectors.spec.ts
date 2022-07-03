import { FoodEntity } from './food.models';
import { foodAdapter, FoodPartialState, initialState } from './food.reducer';
import * as FoodSelectors from './food.selectors';

describe('Food Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFoodId = (it: FoodEntity) => it.id;
  const createFoodEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FoodEntity);

  let state: FoodPartialState;

  beforeEach(() => {
    state = {
      food: foodAdapter.setAll(
        [
          createFoodEntity('PRODUCT-AAA'),
          createFoodEntity('PRODUCT-BBB'),
          createFoodEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Food Selectors', () => {
    it('getAllFood() should return the list of Food', () => {
      const results = FoodSelectors.getAllFood(state);
      const selId = getFoodId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = FoodSelectors.getSelected(state) as FoodEntity;
      const selId = getFoodId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getFoodLoaded() should return the current "loaded" status', () => {
      const result = FoodSelectors.getFoodLoaded(state);

      expect(result).toBe(true);
    });

    it('getFoodError() should return the current "error" state', () => {
      const result = FoodSelectors.getFoodError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
