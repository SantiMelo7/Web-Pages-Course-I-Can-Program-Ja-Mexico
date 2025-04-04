import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebappRoutesModule } from './webapp.routes';
import { HttpClientModule } from '@angular/common/http';
import { WebappService } from './content/services/webapp.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(WebappRoutesModule),
    HttpClientModule
  ],
  providers:[
    WebappService,
  ]
})
export class WebappModule { }


