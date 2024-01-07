import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueci-senha-email-etapa-um',
  templateUrl: './esqueci-senha-email-etapa-um.page.html',
  styleUrls: ['./esqueci-senha-email-etapa-um.page.scss'],
})
export class EsqueciSenhaEmailEtapaUmPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  esqueciSenha(){
    window.location.href = "esqueci-senha-email-etapa-dois";

  }

}
