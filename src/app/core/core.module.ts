import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { IconsModule } from '../icons/icons.module';
import { metaReducers, reducers } from './core.state';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodEffects } from './_state/food.effects';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    IconsModule,
    MatIconModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([FoodEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Foodji Tinder',
        }),
  ],
  exports: [NavbarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
