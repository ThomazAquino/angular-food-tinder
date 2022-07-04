import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MachinesService } from '../machines.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachineDetailComponent implements OnInit, OnDestroy {
  machineStreamSubscriptions: Subscription[] = [];
  machine$ = this.machinesService.getMachine();

  constructor(private machinesService: MachinesService) {}

  ngOnInit(): void {
    /** Uncomment the following subscription to test the shared data stream. */
    // setTimeout(() => this.machineStreamSubscriptions.push(this.machinesService.getMachine().subscribe((e) => console.log('sub 1',e))), 1000);
    // setTimeout(() => this.machineStreamSubscriptions.push(this.machinesService.getMachine().subscribe((e) => console.log('sub 2',e))), 2000);
    // setTimeout(() => this.machineStreamSubscriptions.push(this.machinesService.getMachine().subscribe((e) => console.log('sub 3',e))), 3000);
  }

  ngOnDestroy(): void {
    this.machineStreamSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}
