import { Component, inject } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RegistrarUsuario } from '../account.interface';
@Component({
  selector: 'app-registro-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export default class RegistroUsuarioComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly registrarUsuario = inject(AuthService);
  router = inject(Router); // Asume que tienes un servicio para registrar usuarios
  form = this.formBuilder.group({
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: ['', { validators: [Validators.required] }]
  })

  
  async RegistrarUsuarioForm() {
    let usuarioForm = this.form.value;
    if (this.form.valid) {
      const usuario: RegistrarUsuario = {
        email: usuarioForm.email ?? '',
        password: usuarioForm.password ?? ''
      };
      console.log('Formulario válido:', usuario);
      this.registrarUsuario.registrarUsuario(usuario).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
      });
    }
    else {
      console.log('Formulario inválido');
    }
  }
}


