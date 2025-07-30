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

export interface CategoriaProducto {
  id: string;
  descripcionCategoria: string;
  imagenUrl: string;
  nombreCategoria: string;
}
