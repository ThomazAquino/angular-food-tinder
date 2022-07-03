import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeListComponent } from './swipe-list.component';

describe('SwipeListComponent', () => {
  let component: SwipeListComponent;
  let fixture: ComponentFixture<SwipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
