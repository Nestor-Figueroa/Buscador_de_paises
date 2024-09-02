import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {  //Ruta principal de la aplicacion, es el componente que se despliegue por defecto
       path: '', component: PorPaisComponent,//Para la ruta principal, muestra el componente de porPais 
       pathMatch: 'full' 
    },
    {
        path: 'region', //La extension de la url
        component: PorRegionComponent //El componente que quiero mostrar
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes) //Importar el routermodule
    ],
    exports:[
        RouterModule //Exportar el router module para utilizarlo por fuera del modulo
    ]
})

export class AppRouitingModule{}