import { travelDTO } from './travelDTO.model';
export interface travelObject{
    equipmentId:number,
    mark:string,
    model:string,
    failure:string,
    travelEquipmentDTOs:travelDTO[]
}