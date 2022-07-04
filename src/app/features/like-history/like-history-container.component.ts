import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-like-history-container',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikeHistoryContainerComponent {
  constructor() {}


}
