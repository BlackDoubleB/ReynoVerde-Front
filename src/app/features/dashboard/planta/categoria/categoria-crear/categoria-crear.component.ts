import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { Router } from '@angular/router';
import { CategoriaI } from '../categoria.interface';

@Component({
  selector: 'app-categoria-crear',
  imports: [ReactiveFormsModule],
  templateUrl: './categoria-crear.component.html',
})
export class CategoriaCrearComponent {

  private readonly formBuilder = inject(FormBuilder);
  private readonly _registrarCategoria = inject(CategoriaServiceService);
  router = inject(Router); 

  form = this.formBuilder.group({
    NombreCategoria: ['', { validators: [Validators.required] }],
  })

  async RegistrarCategoria() {
    let categoriaForm = this.form.value;
    if (this.form.valid) {
      const categoriaCreada: CategoriaI = {
        NombreCategoria: categoriaForm.NombreCategoria ?? ''
      };
      console.log('Formulario válido:', categoriaCreada);
      this._registrarCategoria.registrarCategoria(categoriaCreada).subscribe({
        next: () => {
          console.log('Categoría registrada correctamente');
        },
      });
    }
    else {
      console.log('Formulario inválido');
    }
  }
}
