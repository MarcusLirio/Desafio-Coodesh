import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './shared/auth/login.service';
import { Login } from './shared/model/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string 

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) {

      if(this.loginService.usuarioLogado){
        this.router.navigate( ["/page"] )
      }
    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.message = params['error']
  )};
  
  logar(): void {
    this.loading = true;
    if(this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe(usu => {
        if(usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate( ["/page"]);
        }
        else {
          this.loading = false;
          this.message = "Usuario/Senha inválidos."
        }
      }); 
    }
  }
}
