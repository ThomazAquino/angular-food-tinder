import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe-container',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwipeContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
