import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Resp } from '../models/resp.model';
import { WebappService } from '../services/webapp.service';
declare const M: any; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  usuarios: any;
  formLogin!: FormGroup;
  @ViewChild('modalElement') modalElement!: ElementRef;
  private modalInstance!: any;
  mensaje: any;
  
  constructor(
    private Wser: WebappService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      CorreoUsu: ['', [Validators.required, Validators.minLength(8)]],
      Clave: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  ngAfterViewInit(): void {
    if (this.modalElement) { // Verifica que modalElement no sea undefined
      this.modalInstance = M.Modal.init(this.modalElement.nativeElement, {
        dismissible: false,
        opacity: 0.5,
        inDuration: 250,
        outDuration: 250
      });
    } else {
      console.error('El modalElement no está disponible en la vista.');
    }
  }
  

  onIniciarSesion() {
    if (!this.formLogin.invalid) {
      this.Wser.postInicioWeb(this.formLogin.value).subscribe((resp: Resp) => {
        if (resp.Estatus) {
          this.formLogin.reset();
          this.router.navigate(['webadmin']);
        } else{
          this.mensaje= resp.Data;
          this.openModal();
        }
      });
    } else {
      this.mensaje= "Faltan parametros en el formulario";
      this.openModal();
    }
  }
  openModal(): void {
    if (this.modalInstance) {
      this.modalInstance.open();
    }
  }

  closeModal(): void {
    if (this.modalInstance) {
      this.modalInstance.close();
    }
  }
}
 