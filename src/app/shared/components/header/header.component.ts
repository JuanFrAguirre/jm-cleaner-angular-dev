import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    {
      title: 'Inicio',
      link: '/inicio'
    },
    {
      title: 'Productos',
      link: '/productos'
    },
    {
      title: 'Tiendas',
      link: '/tiendas'
    },
    {
      title: 'Compañía',
      link: '/compania'
    },
    {
      title: 'Contacto',
      link: '/contacto'
    },
  ];

  constructor(
    // tslint:disable-next-line: variable-name
    private _interactionService: InteractionService
  ) { }

  ngOnInit(): void {
  }

  openMenu(): any {
    this._interactionService.sendInteraction(true);
  }

}
