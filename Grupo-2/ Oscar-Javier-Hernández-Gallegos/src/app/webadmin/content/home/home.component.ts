import { Router, RouterModule } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

  declare var M: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

    ngAfterViewInit() {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems); // Re-inicializa el collapsible
    }

    //Metodo para cerrar el menu 
    closeMenu() {
      const elems = document.querySelectorAll('.collapsible');
      const instances = M.Collapsible.getInstance(elems[0]);
      instances.close();  // Cierra el menú
    }

}



