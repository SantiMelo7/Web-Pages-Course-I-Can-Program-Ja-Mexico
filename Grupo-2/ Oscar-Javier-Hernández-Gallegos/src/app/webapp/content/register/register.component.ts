import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  usuarios: any;
  formsRegister!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formsRegister = this.fb.group({
      Nombre: ['',[Validators.required,Validators.minLength(2)]],
      Apellidos:['',[Validators.required,Validators.minLength(2)]],
      CorreoUsu:['',[Validators.required,Validators.minLength(8)]],
      Clave:['',[Validators.required,Validators.minLength(8)]],
      Tipo:['',[Validators.required]],
      MunicipioId:['',[Validators.required]],
    });
  }

  onCrearUsuario(){
    console.log()
  }
  prueba(){
    this.router.navigate(['apps/sesion']);
  }
  

}
