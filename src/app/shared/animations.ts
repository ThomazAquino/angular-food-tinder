import { animate, style, transition, trigger } from '@angular/animations';

export const fade =
  trigger('fade', [      
    transition('* => void', [
      animate('120ms ease-out', style({opacity: 0}))
    ])
  ]);