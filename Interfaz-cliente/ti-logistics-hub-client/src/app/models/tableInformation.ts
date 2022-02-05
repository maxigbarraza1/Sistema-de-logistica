export interface tableInformation {
    id:number,
    fecha:Date,
    marca:string,
    modelo:string,
    estadoEquipo:string,
    estadoEnvio:string,
    fechaFin?:Date | string,
  }