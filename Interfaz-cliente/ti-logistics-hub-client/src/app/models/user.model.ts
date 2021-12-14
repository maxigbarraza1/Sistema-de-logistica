//import { Rol } from "./rol.model";

export interface User {
    id?:number;
    email:string;
    password :string;
    fullName :string;
    address :string;
    cellPhone:string;
    isAccepted?:boolean;
    isDeleted?:boolean;
    observations?:string;
    vehicle?:string;
    //rol?:Rol;    
}
