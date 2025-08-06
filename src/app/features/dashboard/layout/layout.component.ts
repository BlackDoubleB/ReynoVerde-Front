import { Component, } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TemaComponent } from "../../../components/tema/tema.component";

@Component({
  selector: 'app-layout',
  imports: [RouterModule, TemaComponent, TemaComponent, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


}
