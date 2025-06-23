import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IniciarSesion } from '../account.interface';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  router = inject(Router); // Asume que tienes un servicio para registrar usuarios
  form = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: ['', { validators: [Validators.required] }]
  })
  async iniciarSesion() {
  let usuarioForm = this.form.value;
      if (this.form.valid) {
        const usuario: IniciarSesion = {
          email: usuarioForm.email ?? '',
          password: usuarioForm.password ?? ''
        };
        console.log('Formulario válido:', usuario);

        this.authService.iniciarSesion(usuario).subscribe({
          next: () => {
            this.router.navigate(['/home']);
          },
            error: err => console.error('Error de login:', err)

        });
      }
      else {
        console.log('Formulario inválido');
      }
    
  }
}
