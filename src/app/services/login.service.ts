import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string, password:string){
    //call api backend api
    //if we get token fron the server
    localStorage.setItem('token', Math.random() + '');
  }

  get IsLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

}
