import { Component, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemaComponent } from "../../../components/tema/tema.component";

@Component({
  selector: 'app-layout',
  imports: [RouterModule, TemaComponent, TemaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


}
