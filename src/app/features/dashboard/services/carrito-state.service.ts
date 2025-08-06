import { Injectable } from '@angular/core';
import {  plantaDetalle } from '../../../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoStateService {
  carritoPlantasS: plantaDetalle[] = [];

  constructor() {

   }

   agregarPlantaCarrito(planta: plantaDetalle){
    this.carritoPlantasS.push(planta);
   }

   obtenerPlantaCarrito(){
      return this.carritoPlantasS;
   }


}
