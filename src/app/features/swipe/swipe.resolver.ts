import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromFood from '../../core/_state/food.selectors';
import { SwipeService } from './swipe.service';

@Injectable({
  providedIn: 'root',
})
export class FoodListResolver implements Resolve<any> {
  constructor(
    private _swipeService: SwipeService,
    private _router: Router,
    private store: Store
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | any {
    // return this._swipeService.getFoods();
    return this.store.pipe(select(fromFood.getNotSwipedFoods), take(1));
  }
}
