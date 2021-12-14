export interface User{
    id:string,
    email:string,
    fullName:string,
    address:string,
    cellPhone:string,
    isAccepter:boolean,
    isDeleted:boolean,
    observations:string,
    password:string,
    vehicle:string,
    rol:{
        id:string,
        name:string,
        isDeleted:string,
    }
}