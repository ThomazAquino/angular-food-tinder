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
  constructor(private machinesService: MachinesService) {}

  ngOnInit(): void {
    this.machineStreamSubscriptions.push(
      this.machinesService.getMachine().subscribe((e) => {
        console.log(e);
      })
    );

    // setTimeout(() => {
    //   this.machineStreamSubscriptions.push(
    //     this.machinesService.getMachine().subscribe((e) => {
    //       console.log(e);
    //     })
    //   );
    // }, 2000);
  }

  ngOnDestroy(): void {
    this.machineStreamSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}
