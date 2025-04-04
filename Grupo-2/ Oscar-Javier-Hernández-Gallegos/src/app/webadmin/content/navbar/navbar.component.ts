import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Importando el RouterModule para usar routerLink
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corregido a styleUrls (plural)
})
export class NavbarComponent {
}
