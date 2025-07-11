import { Component } from '@angular/core';
import { ComentariosComponent } from '../../../../components/comentarios/comentarios.component';

@Component({
  selector: 'app-inicio-comentarios',
  imports: [ComentariosComponent],
  templateUrl: './inicio-comentarios.component.html',
  styleUrl: './inicio-comentarios.component.css'
})
export class InicioComentariosComponent {
  comentarios = [
  {
    foto: 'temporables/usuarios/perfil.png',
    comentario: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    usuario: "Blanca Blacido",
    fecha: '02/07/2025'
  },
  {
    foto: 'temporables/usuarios/perfil.png',
    comentario: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, whes, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    usuario: "Blanca Blacido",
    fecha: '02/07/2025'
  },
  {
    foto: 'temporables/usuarios/perfil.png',
    comentario: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    usuario: "Blanca Blacido",
    fecha: '02/07/2025'
  },
  {
    foto: 'temporables/usuarios/perfil.png',
    comentario: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    usuario: "Blanca Blacido",
    fecha: '02/07/2025'
  },

];
}
