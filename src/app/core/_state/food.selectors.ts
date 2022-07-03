import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FoodEntity } from './food.models';
import { foodAdapter, FoodState, FOOD_FEATURE_KEY } from './food.reducer';

// Lookup the 'Food' feature state managed by NgRx
export const getFoodState = createFeatureSelector<FoodState>(FOOD_FEATURE_KEY);

const { selectAll, selectEntities } = foodAdapter.getSelectors();

export const getFoodLoaded = createSelector(
  getFoodState,
  (state: FoodState) => state.loaded
);

export const getFoodError = createSelector(
  getFoodState,
  (state: FoodState) => state.error
);

export const getAllFood = createSelector(getFoodState, (state: FoodState) =>
  selectAll(state)
);

export const getNotSwipedFoods = createSelector(
  getAllFood,
  (foods: FoodEntity[]) => {
    return foods.filter(food => food.liked === undefined)
  }
);

export const getLikedFoods = createSelector(
  getAllFood,
  (foods: FoodEntity[]) => {
    return foods.filter(food => food.liked)
  }
);

export const getLikedFoodsAlphabetically = createSelector(
  getLikedFoods,
  (likedFoods: FoodEntity[]) => {
     likedFoods.filter(food => food.liked)
     return likedFoods.sort((a,b) => a.name.localeCompare(b.name));
  }
);

export const getFoodIdFromTopOfTheList = createSelector(
  getNotSwipedFoods,
  (notSwipedFoods: FoodEntity[]) => {
    return notSwipedFoods[notSwipedFoods.length - 1]?.id || undefined;
  }
);

// export const getListSelected = createSelector(
//   getVehiclesEntities,
//   getSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );

export const getFoodEntities = createSelector(getFoodState, (state: FoodState) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getFoodState,
  (state: FoodState) => state.selectedId
);

export const getSelected = createSelector(
  getFoodEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
