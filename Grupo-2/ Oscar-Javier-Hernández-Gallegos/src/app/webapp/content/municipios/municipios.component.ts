import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebappService } from '../services/webapp.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
declare const M: any;

@Component({
  selector: 'app-municipios',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './municipios.component.html',
  styleUrl: './municipios.component.css'
})
export class MunicipiosComponent implements OnInit {
  dMunicipios: any;
  formMunicipios!: FormGroup;
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
    this.onGetMunicipios();

    this.formMunicipios = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(2)]],
      Ubicacion: ['', [Validators.required, Validators.minLength(2)]]
    });

  }

  ngAfterViewInit(): void {
    this.modalInstance = M.modal.init(this.modalElement.nativeElement, {
      dismissible: false,
      opacity: 0.5,
      inDuration: 250,
      outDuration: 250
    })
  }
  onGetMunicipios() {
    this.wSer.getMunicipios().subscribe((resp: any) => {
      console.log(resp);
      if (resp.Estatus) {
        this.dMunicipios = resp.Data;
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
      this.formMunicipios.reset();
    }
  }

  onVerItem(registro: any) {
    this.btnOpc = 3;
    console.log(registro);
    this.selRegistro = registro;
    this.openModal();

  }

  onVerCentroAcopio(MunicipioId: any) {
    this.router.navigate(['webapp/centros_acopio']);
    localStorage.setItem('MunicipioId', MunicipioId);
  }

}
