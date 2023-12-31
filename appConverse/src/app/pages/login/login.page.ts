import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public voltar_pagina: any;

  constructor() { }

  ngOnInit() {
  }

  voltar(){
    window.location.href = "cadastro-dados";
  }


  logar(){
    window.location.href = "home";

  }

  esqueciSenha(){
    window.location.href = "esqueci-senha-email-etapa-um";

  }


}
