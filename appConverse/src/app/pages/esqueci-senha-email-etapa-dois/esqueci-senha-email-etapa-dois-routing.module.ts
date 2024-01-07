import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciSenhaEmailEtapaDoisPage } from './esqueci-senha-email-etapa-dois.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaEmailEtapaDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciSenhaEmailEtapaDoisPageRoutingModule {}
