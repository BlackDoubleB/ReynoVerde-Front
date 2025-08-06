export interface Producto {
  id: string;
  productoNombre: string;
  imagenUrl: string;
  precio: number;
  fechaRegistro: string;
  categoriaNombre: string;
  cantidadStock: number;
}

export interface Categoria {
  id: string;
  nombreCategoria: string;
}

// Planta-Detalle
export interface CategoriaProducto {
  id: string;
  descripcionCategoria: string;
  imagenUrl: string;
  nombreCategoria: string;
}
export interface ProductoCategoria {
  id: string;
  categoriaNombre: string;
  productoNombre: string;
  productoDescripcion: string;
  imagenUrl: string;
  precio: number;
  cantidadStock: number;
}
export interface tipoLista {
  beneficios: string[];
  cuidados: string[];
}

//Carrito Planta
export interface plantaDetalle {
  id: string;
  productoNombre: string;
  imagenUrl: string;
  precio: number;
  cantidad: number;
}
