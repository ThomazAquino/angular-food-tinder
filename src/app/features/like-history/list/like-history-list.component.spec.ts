import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeHistoryListComponent } from './like-history-list.component';

describe('LikeHistoryListComponent', () => {
  let component: LikeHistoryListComponent;
  let fixture: ComponentFixture<LikeHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
