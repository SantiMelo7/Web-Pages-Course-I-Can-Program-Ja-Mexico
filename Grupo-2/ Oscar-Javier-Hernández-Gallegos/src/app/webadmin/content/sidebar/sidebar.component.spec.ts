import { Component, AfterViewInit } from '@angular/core';

declare var M: any; // MaterializeCSS

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Inicializa el sidebar de MaterializeCSS
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'left' });
  }
}
