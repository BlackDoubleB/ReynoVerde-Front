import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import CargaComponent from "./components/carga/carga.component";
import { LoadingService } from './features/services/state/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CargaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public loadingVisible= false;
  title = 'ReynoVerAngular';

  constructor(private readonly _loading: LoadingService
  ){
  }

  ngOnInit(): void {
    this.initObservers();
  }

  initObservers() {
    this._loading.obsLoading.subscribe((loading) => {
      this.loadingVisible = loading;
    });
  }
  //Se pone initObservers en ngOnit ya que desde html el usuario no lo llama directamente, sino que se llama desde el servicio de loading
  //Por lo tanto, al iniciar la aplicacion se inicializa el observer para que este pendiente de los cambios en el estado de loading y asi poder mostrar u ocultar el componente de carga.

}

