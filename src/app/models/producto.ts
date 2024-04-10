export interface Producto {
  _id?: string; // Podrías tener un identificador único en el frontend si lo necesitas
  nombre: string;
  imagen?: string;
  precio: number;
  descuento?: number;
  precioFinal: number;
}
