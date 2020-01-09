import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //private apiKey:'AIzaSyCPDBAoPQ_3ubSBfBU-NMsAcKu5nsdzEFc';
//crear nuevo usuario
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


//login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http:HttpClient) { }


  logOut(){

  }


  logIn(usuario:UsuarioModel){
    const authData={
      ...usuario,
      returnSecureToken:true
    }  
      return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPDBAoPQ_3ubSBfBU-NMsAcKu5nsdzEFc',authData);

  }
  

  nuevoUsuario(usuario:UsuarioModel){
    const authData={
      ...usuario,
      returnSecureToken:true
    }
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPDBAoPQ_3ubSBfBU-NMsAcKu5nsdzEFc',authData);
  }
}
