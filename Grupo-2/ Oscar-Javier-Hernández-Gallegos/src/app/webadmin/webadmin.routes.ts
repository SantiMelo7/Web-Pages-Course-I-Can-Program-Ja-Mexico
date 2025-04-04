import { NgModule } from "@angular/core";
import { /*RouterModule,*/ Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { CamionesComponent } from "./content/camiones/camiones.component";
import { CentrosacopiosComponent } from "./content/centrosacopios/centrosacopios.component";
import { HomeComponent } from "./content/home/home.component";
import { UsuariosComponent } from "./content/usuarios/usuarios.component";
import { RutasComponent } from "./content/rutas/rutas.component";

export const WebadminRoutesModule: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'rutas',
        component: RutasComponent
      },
      {
        path: 'camiones',
        component: CamionesComponent
      },
      {
        path: 'centrosacopios',
        component: CentrosacopiosComponent
      },
      {
        path: 'inicio',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'

      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];
