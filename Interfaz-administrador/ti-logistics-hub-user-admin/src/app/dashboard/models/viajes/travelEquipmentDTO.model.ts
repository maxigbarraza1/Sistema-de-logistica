import { Equipment } from './travelEquipment.model';
import { Operator } from './travelOperator.model';

export interface DTO{
    id:number,
    operationDate:Date,
    observation:null,
    cadete:Operator | null,
    operator:Operator
    equipment:Equipment,
    statusTravel:number,
}