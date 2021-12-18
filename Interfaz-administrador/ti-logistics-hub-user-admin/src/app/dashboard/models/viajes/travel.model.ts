import { DTO } from "./travelEquipmentDTO.model"
export interface Viaje{
    id:                  number;
    creationDate:        Date;
    lastStatusTravel:    number;
    travelEquipmentDTOs: DTO[];
}