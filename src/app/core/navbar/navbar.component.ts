import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetFoodList } from '../_state/food.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block mb-4 sticky top-0 z-10' },
})
export class NavbarComponent {
  constructor(private store: Store) {}

  public reset() {
    console.log('🚀 🚀 🚀  ~ reset ~ reset')
    this.store.dispatch(resetFoodList());
  }
}
