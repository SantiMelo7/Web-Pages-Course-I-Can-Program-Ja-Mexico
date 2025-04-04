import { /*RouterModule,*/ Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./content/login/login.component";
import { HomeComponent } from "./content/home/home.component";
import { CentrosAcopioComponent } from "./content/centros-acopio/centros-acopio.component";
import { MunicipiosComponent } from "./content/municipios/municipios.component";
import { RutasComponent } from "./content/rutas/rutas.component";
import { CamionesComponent } from "./content/camiones/camiones.component";





export const WebappRoutesModule: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'sesion',
        component: LoginComponent
      },
      {
        path: 'inicio',
        component: HomeComponent
      },
      {
        path: 'municipios',
        component: MunicipiosComponent
      },
      {
        path: 'centros_acopio',
        component: CentrosAcopioComponent
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