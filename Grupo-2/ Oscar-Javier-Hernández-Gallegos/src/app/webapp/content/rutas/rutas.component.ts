import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebappService } from '../services/webapp.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
declare const M: any;

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent implements OnInit {
  dRutas: any;
  formRutas!: FormGroup;
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
    this.onGetRutas();

    this.formRutas = this.fb.group({
      Guia: ['', [Validators.required, Validators.minLength(2)]],
      NombreRuta: ['', [Validators.required, Validators.minLength(2)]]
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

  onGetRutas(){
    this.wSer.getRutas().subscribe((resp: any) =>{
      console.log(resp);
      if (resp.Estatus) {
        this.dRutas = resp.Data;
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
      this.formRutas.reset();
    }
  }
  
  onVerCamiones(RutasId: any) {
    this.router.navigate(['webapp/camiones']);
    localStorage.setItem('RutasId', RutasId);
  }

}
