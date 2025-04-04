import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

declare var M: any; // Importamos el objeto M de Materialize para poder usarlo

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, SidebarComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Inicializar el sidenav
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }
}
