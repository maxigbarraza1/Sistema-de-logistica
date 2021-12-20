import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NewUser } from '../../models/register/registerUser.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../../services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../../components/editar-usuario/editar-usuario.component';
import { map, Observable } from 'rxjs';
import { RegisterService } from '../../services/register/register.service';
import Swal from 'sweetalert2';

const rol=[ "Administrador", "Cadete", "Cliente"];

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.sass']
})
export class ListasComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['nombre','rol','direccion','telefono','email','vehiculo','accion']; //'vehiculo',
  dataSource:MatTableDataSource<NewUser>;

  @ViewChild(MatPaginator) paginator:any;

  public data:NewUser[]=[];
  public datosTabla:NewUser[]=[];

  public typeUser:number=1;

  constructor(private dataService:DataService, public dialog: MatDialog, private registerService:RegisterService) {
    this.dataSource = new MatTableDataSource(this.datosTabla);
    this.dataSource.paginator=this.paginator;
  }

  changeTypeUser(param:number){
    this.typeUser=param;
    this.actualizarDatos();
  }

  getRol(param:number):string{
    return(rol[param-1]);
  }

  getNombre(param:string):string{
    return( param.trim());
  }

  getVehiculo(param:NewUser):string{
    if(param.vehicle==null)
      return("---")
    return param.vehicle.name;
  }

  actualizarDatos():void{
    this.dataService.getUsuarios().subscribe(users=>{
      this.data=users;
      this.datosTabla=[];
      if(this.typeUser==1){//Opcion todos los usuarios
        for(let i=0; i<this.data.length;i++)
          if(this.data[i].isDeleted==false)
            this.datosTabla.push(this.data[i]);
        this.datosTabla.sort((a,b)=>a.rol.id - b.rol.id);
        this.dataSource = new MatTableDataSource(this.datosTabla);
        this.dataSource.paginator=this.paginator;
      }else{
        if(this.typeUser==2){//Opcion clientes
          for(let i=0;i<this.data.length;i++){
            if(this.data[i].rol.id==3 && this.data[i].isDeleted==false)
              this.datosTabla.push(this.data[i]);
          }
          this.dataSource = new MatTableDataSource(this.datosTabla);
          this.dataSource.paginator=this.paginator;
        }else{
          if(this.typeUser==3){//Opcion cadetes
            for(let i=0;i<this.data.length;i++){
              if(this.data[i].rol.id==2 && this.data[i].isDeleted==false)
                this.datosTabla.push(this.data[i]);
            }
            this.dataSource = new MatTableDataSource(this.datosTabla);
            this.dataSource.paginator=this.paginator;
          }else{
            for(let i=0;i<this.data.length;i++){
              if(this.data[i].rol.id==1 && this.data[i].isDeleted==false)
                this.datosTabla.push(this.data[i]);
            }
            this.dataSource = new MatTableDataSource(this.datosTabla);
            this.dataSource.paginator=this.paginator;
          }
        }
      }
    })
  }

  ngOnInit(): void {
    this.actualizarDatos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog():void{
    const dialogRef = this.dialog.open(EditarUsuarioComponent,{
      width:'60vw'
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log('El dialogo se cerro');
    })
  }

  modificarUsuario(param:NewUser):void{
    this.registerService.userModificado=param;
    this.openDialog();
  }

  borarUsuario(param:NewUser):void{
    this.registerService.userModificado=param;
    this.registerService.userModificado.isDeleted=true;
    let texto:string=`Estas a punto de borrar el usuario ${this.registerService.userModificado.fullName}`
    Swal.fire({
      title: '¡Atención!',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerService.setUser(this.registerService.userModificado).subscribe(resp=>{
          Swal.fire({
            icon: 'success',
            title: 'El usuario fue eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.actualizarDatos();
        })
      }
    })

    
  }

}