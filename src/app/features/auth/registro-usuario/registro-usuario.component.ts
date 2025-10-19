import { Component, inject } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { RegistrarUsuario } from '../account.interface';
import { TemaComponent } from "../../../components/tema/tema.component";
@Component({
  selector: 'app-registro-usuario',
  imports: [ReactiveFormsModule, TemaComponent, RouterModule],
  templateUrl: './registro-usuario.component.html',
})
export default class RegistroUsuarioComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly registrarUsuario = inject(AuthService);
  router = inject(Router); 
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


