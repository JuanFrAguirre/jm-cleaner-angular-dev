import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // boton de menu para moviles
  private MenuOpenedInteractionSource = new Subject<boolean>();
  menuOpenedIteractionObserver$ = this.MenuOpenedInteractionSource.asObservable();

  constructor() { }

  sendInteraction(state: boolean): any {
    this.MenuOpenedInteractionSource.next(state);
  }
}
