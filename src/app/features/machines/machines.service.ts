import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  retryWhen,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';

const MACHINE_ID = 'bce7febc-e50b-4211-bda9-6ac51ad34be6';
const POLLING_DELAY_MS = 5000;
const MAX_RECONNECT_ATTEMPTS = 3;

@Injectable({
  providedIn: 'root',
})
export class MachinesService implements OnDestroy {
  private machinePolling: Observable<any>;
  private stopPolling = new Subject();
  private machineData$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.machinePolling = timer(0, POLLING_DELAY_MS).pipe(
      switchMap(() => this.fetchMachine()),
      share(),
      takeUntil(this.stopPolling),
      tap((data) => this.machineData$.next(data)),
      retryWhen((error$) =>
        error$.pipe(
          delay(POLLING_DELAY_MS),
          take(MAX_RECONNECT_ATTEMPTS),
          tap({
            complete: () =>
              console.log(
                'Error while fetching machine data, please try again later.'
              ),
          })
        )
      )
    );
  }

  public getMachine(): Observable<any> {
    return this.machinePolling.pipe(
      startWith(this.machineData$.value),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      tap(() => console.log('data sent to subscriber'))
    );
  }

  fetchMachine(): Observable<any> {
    return this.http
      .get(`https://amperoid.tenants.foodji.io/machines/${MACHINE_ID}`)
      .pipe(
        tap((data) =>
          console.log(
            '************** HTTP CALL MADE **************',
            `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
          )
        )
      );
    // return of({apiVersion: '1.0', status: 'success', data: {}}).pipe(
    //   tap(data => console.log('************** HTTP CALL MADE **************', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`))
    // )
  }

  ngOnDestroy() {
    console.log('Service Destroyed.');
    this.stopPolling.next(null);
  }
}

/**
 * 
  1 (OK). write a small machine service that receives the demo machine content via Angular http client
    from this URL: https://amperoid.tenants.foodji.io/machines/bce7febc-e50b-4211-bda9-6ac51ad34be6
    And implement a polling mechanism that is using RxJS. The mechanism should retrieve the data every 5 seconds.

  2 (OK). the Observable should return the last cached data to new subscribers and not execute a new
    request (as the polling mechanism is polling for new data anyway).

  3 (OK). the Observable shall deliver new data to subscribers only if the data is different from the
    previous retrieval.

  4. if an error occurs during retrieval, the system shall retry up to three times before throwing an
    error. There shall be 5 seconds between attempts.


  **** Hint**** : You can also use more than one observable (and observable type) and combine them. Also
                  consider using special Observable like Subjects.

 */
