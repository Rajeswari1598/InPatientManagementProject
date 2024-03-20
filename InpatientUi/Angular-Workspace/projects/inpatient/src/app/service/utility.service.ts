import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public isLoggedIn:boolean=false;
  public user:any=null;
  public role:string="";
  isLogged(){
    return this.isLoggedIn;
  }

  getUser(){
    const userData=localStorage.getItem('userData')
    return userData ? JSON.parse(userData):null
  }

  loginIn(user:any){
    this.isLoggedIn=true;
    localStorage.setItem('userData', JSON.stringify(user))
  }

  logout(){
    this.isLoggedIn=false;
    localStorage.removeItem('userData')
  }

}