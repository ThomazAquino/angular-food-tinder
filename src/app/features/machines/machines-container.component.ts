import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machines-container',
  template: `<router-outlet></router-outlet>`,
})
export class MachinesContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
