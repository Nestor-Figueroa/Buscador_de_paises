import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }
  //Consumimos el servicio que creamos para hacer la consulta a la api
  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).
      subscribe((paises)=>{
        this.paises = paises;
      }, (err) =>{ //Obtener y manejar el error
        this.hayError = true;
        this.paises = [];
      })

  }
}
