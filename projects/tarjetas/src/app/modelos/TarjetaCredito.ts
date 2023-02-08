export class TarjetaCredito {

  id?: string;
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: Date;
  cvv: number;
  fechaCreacion: Date;
  fechaActualizacion: Date;

  constructor(
    titular: string,
    numeroTarjeta: string,
    fechaExpiracion: Date,
    cvv: number
  ) {
    this.titular = titular;
    this.numeroTarjeta = numeroTarjeta;
    this.fechaExpiracion = fechaExpiracion;
    this.cvv = cvv;
    this.fechaCreacion = new Date();
    this.fechaActualizacion = new Date();
  }
}
