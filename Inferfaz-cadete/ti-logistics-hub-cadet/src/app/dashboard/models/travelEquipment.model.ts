import { Cliente } from "./travelClient.model"

export interface Equipment{
    id:number,
    mark:string,
    model:string,
    failure:string,
    clientId:number,
    cliente:Cliente
}
