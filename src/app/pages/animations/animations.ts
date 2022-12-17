import { trigger, transition, style, query, animate } from "@angular/animations";

export const fadeAnimation =
  trigger('fadeInOut', [
    transition('* <=> *', [

      query(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.5s ease-in',
          style({
            'opacity': '1',
          }))
      ], { optional: true }),
      query(':leave', [
        style({
          opacity: 1,
        }),
        animate('0.5s ease-out',
          style({
            'opacity': '0',
          }))
      ], { optional: true })

    ])
  ]);