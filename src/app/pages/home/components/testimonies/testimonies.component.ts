import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  testimonies = [
    {
      author: 'María Inés',
      occupation: 'Ama de casa',
      testimony: 'Desde que tengo 6 años uso lentes recetados y siempre fue una batalla tenerlos limpios. Hace poco probé JM Cleaner y la limpieza me resulta mucho más fácil. No lo cambio por nada.'
    },
    {
      author: 'Leandro Lema',
      occupation: 'Guardaparques',
      testimony: 'Antes el empañamiento era un problema, tanto en la montaña como en el buceo. Ahora, con JM Cleaner todo dio un giro impresionante nunca antes pensado para mí. Lo súper recomiendo. '
    },
    {
      author: 'Juan Carlos',
      occupation: 'Motociclista',
      testimony: 'Viajé en moto 15 días. Hice 7500 km andando de día y noche con sol y lluvia, toda una aventura. Fue increíble descubrir que no tenía que estar permanentemente limpiando el casco. Sin dudas que lo hubiera disfrutado mucho menos sin JM Cleaner. 100% recomendable.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
