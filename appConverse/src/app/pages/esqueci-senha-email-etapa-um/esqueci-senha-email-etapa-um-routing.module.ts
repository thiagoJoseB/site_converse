import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciSenhaEmailEtapaUmPage } from './esqueci-senha-email-etapa-um.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaEmailEtapaUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciSenhaEmailEtapaUmPageRoutingModule {}
