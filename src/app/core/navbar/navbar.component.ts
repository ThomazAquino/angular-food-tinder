import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetFoodList } from '../_state/food.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host: {'class': 'block mb-4 sticky top-0 z-10'}
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public reset() {
    this.store.dispatch(resetFoodList());
  }

}
