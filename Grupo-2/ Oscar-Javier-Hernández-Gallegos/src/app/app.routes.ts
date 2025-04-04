import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'webapp',
    loadChildren: () => import('./webapp/webapp.module').then(m => m.WebappModule)
  },

  {
    path: 'webadmin',
    loadChildren: () => import('./webadmin/webadmin.module').then(m => m.WebadminModule)
  },

  
  {
    path: '',
    redirectTo: 'webapp',
    pathMatch: 'full'
  }, // Ruta por defecto

  {
    path: '**',
    redirectTo: 'webapp'
  }

];

