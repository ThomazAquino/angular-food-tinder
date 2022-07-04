import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import * as foodActions from '../../../core/_state/food.actions';
import * as fromFood from '../../../core/_state/food.selectors';
import { getNotSwipedFoods } from '../../../core/_state/food.selectors';


/** CSS Class responsable for applying transition while the element is being 'transformed' (Ex: translate3d, rotate). */
const ANIMATION_TRANSFORM_CSS_CLASS = 'drag-animating';
/** Multiplier factor to rotate the card while the user is dragging it. */
const ROTATION_FACTOR = 18;
/** Multiplier factor to rotate the card while the user is dragging it. */
const TRANSITION_TIME = 250;

@Component({
  selector: 'app-swipe-list',
  templateUrl: './swipe-list.component.html',
  styles: [`
    .drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
  `],
  host: {'class': 'block max-w-80 mx-auto'}
})
export class SwipeListComponent implements OnInit {
  foodList$ = this.store.select(getNotSwipedFoods)
  idFromTopOfTheList$ = this.store.select(fromFood.getFoodIdFromTopOfTheList)

  constructor(
    private store: Store<any>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.foodList$.subscribe(e => {
      console.log(e)
    });
  }


  /** Prepare the element to be dragged by removing his transition classes. */
  public cdkDragStarted(event: CdkDragStart): void {
    this.renderer.removeClass(this.getCardWrapper(event), ANIMATION_TRANSFORM_CSS_CLASS);
    this.renderer.removeClass(this.getCardElement(event), ANIMATION_TRANSFORM_CSS_CLASS);
  }

  /** Rotate the card while the user is dragging. */
  public cdkDragMoved(event: CdkDragMove): void {
    this.renderer.setStyle(
      this.getCardElement(event),
      'transform',
      `rotate(${ event.distance.x / ROTATION_FACTOR }deg)`
    );
  }

  /** Animate the element outside of viewport or animate it back to his original position. */
  public cdkDragEnded(event: CdkDragEnd, foodId: string): void {
    this.renderer.addClass(this.getCardWrapper(event), ANIMATION_TRANSFORM_CSS_CLASS);

    if (Math.abs(event.distance.x) > 200) {
      const element = this.getCardWrapper(event);
      const direction = Math.sign(event.distance.x);
      this.animateElementOutOfScreen(element, direction);
      setTimeout(() => this.store.dispatch(
        foodActions.likeFood({food: {id: foodId, changes: {liked: direction === 1 ? true : false}}})
        ), TRANSITION_TIME
      );
      
    } else {
      this.animateElementToOriginalPosition(event);
    }
  }

  /** Programmatically like or dislike a food. */
  public evaluateFood(foodId: string, like: boolean) {
    const element = document.querySelector(`[data-id="${foodId}"]`);
    const direction = like ? 1 : -1;
    this.animateElementOutOfScreen(element, direction);
    setTimeout(() => this.store.dispatch(foodActions.likeFood({food: {id: foodId, changes: {liked: like}}})), TRANSITION_TIME);
  }

  public reset() {
    this.store.dispatch(foodActions.resetFoodList());
  }

  private animateElementOutOfScreen(element: Element, direction: number): void {
    this.renderer.setStyle(element, 'transform', `translate3d(${130 * direction}%, 0px, 0px)`);
    this.renderer.setStyle(element.querySelector('.example-box'), 'transform', `rotate(${20 * direction}deg)`)
  }

  private animateElementToOriginalPosition(event: CdkDragEnd): void {
    this.renderer.addClass(this.getCardElement(event), ANIMATION_TRANSFORM_CSS_CLASS);
    this.renderer.setStyle(this.getCardElement(event),  'transform', `rotate(0deg)`)
    event.source._dragRef.reset();
  }
  
  private getCardWrapper(event: CdkDragStart | CdkDragEnd): HTMLElement {
    return event.source.element.nativeElement;
  }

  private getCardElement(event: CdkDragStart | CdkDragEnd): HTMLElement {
    return event.source.element.nativeElement.querySelector('.example-box')!;
  }
}



