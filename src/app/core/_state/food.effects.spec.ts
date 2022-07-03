import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as FoodActions from './food.actions';
import { FoodEffects } from './food.effects';

describe('FoodEffects', () => {
  let actions: Observable<Action>;
  let effects: FoodEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        FoodEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(FoodEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: FoodActions.init() });

      const expected = hot('-a-|', {
        a: FoodActions.loadFoodSuccess({ food: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
