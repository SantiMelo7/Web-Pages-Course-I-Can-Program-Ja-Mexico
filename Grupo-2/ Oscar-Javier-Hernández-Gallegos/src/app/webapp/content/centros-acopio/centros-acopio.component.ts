import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebappService } from '../services/webapp.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
declare const M: any;

@Component({
  selector: 'app-centros-acopio',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './centros-acopio.component.html',
  styleUrl: './centros-acopio.component.css'
})
export class CentrosAcopioComponent implements OnInit {
  dCentroAcopio: any;
  formCentrosAcopios!: FormGroup;
  btnOpc = 1;

  @ViewChild('modalElement') modalElement!: ElementRef;
  private modalInstance!: any;
  mensaje: any;
  selRegistro: any;
  constructor(
    private wSer: WebappService,
    private fb: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.onGetCentrosAcopios();

    this.formCentrosAcopios = this.fb.group({
      Imagen: ['', [Validators.required, Validators.minLength(2)]],
      Nombre: ['', [Validators.required, Validators.minLength(2)]],
      Direccion: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
 

  ngAfterViewInit(): void {
    this.modalInstance = M.modal.init(this.modalElement.nativeElement, {
      dismissible: false,
      opacity: 0.5,
      inDuration: 250,
      outDuration: 250
    })
  }

  onGetCentrosAcopios(){
    this.wSer.getCentrosAcopios().subscribe((resp: any) =>{
      console.log(resp);
      if (resp.Estatus) {
        this.dCentroAcopio = resp.Data;
      }
    });
  }

  openModal(): void {
    if (this.modalInstance) {
      this.modalInstance.open();
    }
  }
  closeModal(): void {
    if (this.modalInstance) {
      this.modalInstance.close();
      this.btnOpc = 1;
      this.formCentrosAcopios.reset();
    }
  }

  onVerItem(registro: any) {
    this.btnOpc = 3;
    console.log(registro);
    this.selRegistro = registro;
    this.openModal();

  }

  onVerRutas(CentroAcopioId: any) {
    this.router.navigate(['webapp/rutas']);
    localStorage.setItem('CentroAcopioId', CentroAcopioId);
  }




}


