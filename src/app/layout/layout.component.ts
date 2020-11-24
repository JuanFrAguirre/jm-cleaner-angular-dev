import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../core/services/interaction.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuStatus: boolean;
  constructor(
    private _interactionService: InteractionService
  ) { }

  ngOnInit(): void {
    this._interactionService.menuOpenedIteractionObserver$.subscribe(
      status => {
        console.log(this.menuStatus);
        this.menuStatus = status;
        console.log(this.menuStatus);
      }
    );
  }

}
