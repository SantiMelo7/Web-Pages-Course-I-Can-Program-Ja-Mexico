import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebadminRoutesModule } from './webadmin.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(WebadminRoutesModule)
  ]
})
export class WebadminModule { }