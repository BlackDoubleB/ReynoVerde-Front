import { Component } from '@angular/core';
import { CategoriaCrearComponent } from "../categoria-crear/categoria-crear.component";
import CategoriaListarComponent from "../categoria-listar/categoria-listar.component";

@Component({
  selector: 'app-categoria-main',
  imports: [CategoriaCrearComponent, CategoriaListarComponent],
  templateUrl: './categoria-main.component.html',
})
export default class CategoriaMainComponent {

}
