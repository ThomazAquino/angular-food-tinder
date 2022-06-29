import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = ['1', '2', '3', '4', '5', '6', '7', '8'];

  constructor(
    private renderer: Renderer2
  ) {}


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
  public cdkDragEnded(event: CdkDragEnd): void {
    this.renderer.addClass(this.getCardWrapper(event), ANIMATION_TRANSFORM_CSS_CLASS);

    if (Math.abs(event.distance.x) > 200) {
      this.animateElementOutOfScreen(event);
      
    } else {
      this.animateElementToOriginalPosition(event);
    }
  }

  private animateElementOutOfScreen(event: CdkDragEnd): void {
    const direction = Math.sign(event.distance.x);
    this.renderer.setStyle(this.getCardWrapper(event), 'transform', `translate3d(${130 * direction}%, 0px, 0px)`);
    this.renderer.setStyle(this.getCardElement(event),  'transform', `rotate(${20 * direction}deg)`)
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

/** CSS Class responsable for applying transition while the element is being 'transformed' (Ex: translate3d, rotate). */
const ANIMATION_TRANSFORM_CSS_CLASS = 'drag-animating'
/** Multiplier factor to rotate the card while the user is dragging it. */
const ROTATION_FACTOR = 18
