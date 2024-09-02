//Este es el servicio para consumir la API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //Esta es la url para consumir un endpoint de la api
  private apiUrl : string = 'https://restcountries.com/v3.1';
  
  
  //Inyectamos el servicio httpcliente
  constructor(private http: HttpClient) { }

  //Metodo para buscar por pais
  buscarPais(termino: string): Observable<Country[]>{
    //Llamado a la api
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
  }

  //Metodo para buscar por capital
  buscarCapital(termino: string): Observable<Country[]>{
    //Llamado a la api
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url)
  }

    //Metodo para buscar por id
  getPaisPorAlpha(id: string): Observable<Country[]>{
    //Llamado a la api
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }
  //Metodo para buscar por region
  buscarRegion(region:string) : Observable<Country[]>{
    //Llamado a la api
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
  }
}
