import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Card1Component } from '../../../../components/card-1/card-1.component';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { CommonModule } from '@angular/common';
import BarraFiltroComponent from '../../../../components/barra-filtro/barra-filtro.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planta-seccion',
  imports: [Card1Component, CommonModule, BarraFiltroComponent],
  templateUrl: './planta-seccion.component.html',
})
export default class PlantaSeccionComponent implements OnInit {
  private _plantasService = inject(ServiceDashboardService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  plantas: any[] = [];
  loading = false;

  categorias: any[] = [];
  estadoFiltro = signal(false);
  categoriasSeleccionadasHijo: string[] = [];
  categoriasSeleccionadasUrl: string[] = [];
  nombreFiltro: string | null = null;
  mostrarFiltro = signal(false);

  abrirFiltro() {
    this.mostrarFiltro.set(true);
     this.estadoFiltro.set(!this.estadoFiltro());
    if (this.estadoFiltro()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  cerrarFiltro() {
    this.mostrarFiltro.set(false);
     this.estadoFiltro.set(!this.estadoFiltro());
    if (this.estadoFiltro()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
  }

  ngOnInit(): void {
    this._plantasService
      .ObtenerTodaCategoria()
      .subscribe((resultado) => (this.categorias = resultado));

    this.activatedRoute.queryParams.subscribe((params) => {
      let categoria = params['categoria'] || [];

      categoria = Array.isArray(categoria) ? categoria : [categoria];
      let array = [...categoria];
      this.categoriasSeleccionadasUrl = [...new Set(array)];
      //Cuando hago un cambio de query params y quiero consultar por ingreso manual en la url, se recarga la pagina por lo que este ngoninit se activa y borra todo dato del heap, menos las url del navegador, se obtiene los datos cambiados en la url y pasamos la url al categoriasSeleccionadasUrl, eso se envia al hijo que escucha desde ngoninit(porque el renderizado del padre renderiza el hijo y activa su ngoninit) agrega este categoriasSeleccionadasUrl al array que luego ellos vuelven a enviar cuando se da check desde el formularioo hijo, siendo ambos anidados.

      //La url del navegador puede ser manipulada al mismo tiempo tambien los check del form, esto porque:
      //Si recargo se guarda la url y se anida con el array del hijo
      //El array del hijo trabajo sin verse afectado porque sus cambios llaman a obtenerPlantas fuera del ngoninit haciendo que el route redirija sin problemas, ademas si se elimina un param desde el form esto elimina desde el array del hijo y dicho array se llama en obtenerPlantas fuera de ngoninit hacuendo que el route funcione sin problemas.
    });
    //antes no se mantenian datos en la url porque al recargar llamaba al obtenerPlantas() sin parametros y no se pasaba array porque se eliminan en recargas
    this.obtenerPlantas(this.categoriasSeleccionadasUrl);
  }

  todoplanta = false;
  plantaporcategoria = false;
  plantapornombre = false;

  obtenerPlantas(categorias: string[] = [], nombre: string | null = null) {
    this.loading = true;

    this.actualizarURL(categorias, nombre);

    this._plantasService.obtenerProductoFiltrado(categorias, nombre).subscribe({
      next: (data) => {
        this.plantas = data;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al obtener plantas:', error);
      },
    });
  }

  private actualizarURL(categorias: string[], nombre: string | null) {
    let queryParams: any = {};

    if (categorias.length > 0) {
      queryParams.categoria = categorias;
    }

    if (nombre) {
      queryParams.nombre = nombre;
    }

    if (categorias.length === 0) {
      queryParams.categoria = null;
    }
    console.log('queryParams', queryParams);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  onCategoriasSeleccionadas(categorias: string[]) {
    //Como desde NgOninit ya se cargo los datos anteriores, al hacer la segunda consulta desde el hijo seleccionado con datos repetidos seguira haciendo la misma consulta
    //Para sincronizar los check con el hijo se envia categoriasSeleccionadasUrl y pone dentro de NgOnInit para que refrezque su componente

    this.categoriasSeleccionadasHijo = categorias;
    console.log('Categorías seleccionadas:', this.categoriasSeleccionadasHijo);
    this.obtenerPlantas(this.categoriasSeleccionadasHijo, this.nombreFiltro);
  }

  filtrarPorNombre(nombre: string) {
    this.nombreFiltro = nombre;
    this.obtenerPlantas(this.categoriasSeleccionadasHijo, this.nombreFiltro);
  }
}
