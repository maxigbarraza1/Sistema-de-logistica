export interface travelDTO{
    id:number,
    operationDate:Date,
    observation:string,
    cadete:string,
    operator:{
        id:number,
        email:string,
        fullName:string,
        address:string,
        cellPhone:string,
    },
    equipment:string,
    statusTravel:number
}