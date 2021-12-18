import { Rol } from './rol.model';
import { Vehicle } from './vehicle.model';

export interface NewUser{
    id:           number;
    email:        string;
    fullName:     string;
    address:      string;
    cellPhone:    string;
    isAccepted:   boolean;
    isDeleted:    boolean;
    observations: string;
    password:     string;
    rol:          Rol;
    vehicle?:     Vehicle | null;
}
