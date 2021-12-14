import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.sass']
})
export class ForgotComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: '¡Se inicio el proceso de reestablecimiento de cuenta! Recuerda revisar tambien la casilla de Spam',
      showConfirmButton: false,
      timer: 2500
    });
  }

}
