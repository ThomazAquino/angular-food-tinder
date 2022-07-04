import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machines-container',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
