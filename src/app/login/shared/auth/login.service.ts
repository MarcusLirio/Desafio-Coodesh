import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../model/login.model';
import { UsuarioModel } from '../model/usuario';



const LS_CHAVE: string = 'UsuarioLogado'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): UsuarioModel {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]): null)
  }

  public set usuarioLogado(usuario: UsuarioModel) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<UsuarioModel | null> {
    let usu = new UsuarioModel(1, "Razer-Func", login.email, login.senha, "FUNC");

    if (login.email == login.senha) {

      if(login.email == "admin") {
        usu = new UsuarioModel(1, "Razer-Admin", login.email, login.senha, "ADMIN")
      }
      else if (login.email !== "admin") {
        usu = new UsuarioModel(1, "Razer-Gerente", login.email, login.senha, "NORMAL")
      }
      return of(usu);
      
    }
    else {
      return of(null);
    }
  }
}
