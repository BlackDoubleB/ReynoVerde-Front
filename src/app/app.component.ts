import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import CargaComponent from "./components/carga/carga.component";
import { LoadingService } from './features/services/state/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CargaComponent],
  templateUrl: './app.component.html',
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
}

