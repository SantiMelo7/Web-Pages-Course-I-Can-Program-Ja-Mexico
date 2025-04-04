import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebappService } from '../services/webapp.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
declare const M: any;

@Component({
  selector: 'app-camiones',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './camiones.component.html',
  styleUrl: './camiones.component.css'
})
export class CamionesComponent implements OnInit{
  dCamiones: any;
  fromCamiones!: FormGroup;
  btnOpc = 1;

  @ViewChild('modalElement') modalElement!: ElementRef;
  private modalInstance!: any;
  mensaje: any;
  selRegistro: any;

  constructor(
    private wSer: WebappService,
    private fb: FormBuilder,
    private router: Router

  ){}

  ngOnInit(): void {
    this.onGetCamiones();

    this.fromCamiones = this.fb.group({
      LatCam: ['', [Validators.required, Validators.minLength(2)]],
      LongCam: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngAfterViewInit(): void{
    this.modalInstance = M.modal.init(this.modalElement.nativeElement, {
      dismissible: false,
      opacity: 0.5,
      inDuration: 250,
      outDuration: 250
    })
  }

  onGetCamiones(){
    this.wSer.getCamiones().subscribe((resp: any) =>{
      console.log(resp);
      if (resp.Estatus) {
        this.dCamiones = resp.Data;
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
      this.fromCamiones.reset();
    }
  }
  

}
