import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer
    }
    `
  ]
})
export class PorPaisComponent {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }
  //Consumimos el servicio que creamos para hacer la consulta a la api
  buscar(termino: string){
    
    this.hayError = false;
    this.termino = termino;
 

    this.paisService.buscarPais(termino).
      subscribe((paises)=>{
        console.log(paises);
        this.paises = paises;

      }, (err) =>{ //Obtener y manejar el error
        console.log('Error');
        console.info(err);
        this.hayError = true;
        this.paises = [];
      })

  }
  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );
    
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
