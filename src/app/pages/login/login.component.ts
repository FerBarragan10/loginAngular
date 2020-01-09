import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel=new UsuarioModel();
  constructor(private auth:AuthService) { }

  ngOnInit() {
    
  }
  onSubmit(formu:NgForm){
    if(formu.invalid){
      return;
    }
    this.login();
   }
   login(){
     this.auth.logIn(this.usuario).subscribe(data=>{
        console.log(data);
      },(err)=>{
        console.log(err.error.error.message);
      });
   }
}
