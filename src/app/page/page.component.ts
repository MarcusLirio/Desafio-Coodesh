import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("UsuarioLogado");
    window.location.reload();
  }

}
