import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { IniciarSesion } from '../account.interface';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TemaComponent } from "../../../components/tema/tema.component";
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, TemaComponent],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  router = inject(Router);
  form = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: ['', { validators: [Validators.required] }]
  })

  
  iniciarSesion() {
  let usuarioForm = this.form.value;
      if (this.form.valid) {
        const usuario: IniciarSesion = {
          email: usuarioForm.email ?? '',
          password: usuarioForm.password ?? ''
        };
        this.authService.iniciarSesion(usuario).subscribe({
          next: () => {
            this.router.navigate(['/inicio']);
          },
            error: err => console.error('Error de login:', err)

        });
      }
      else {
        console.log('Formulario inválido');
      }
    
  }
}
