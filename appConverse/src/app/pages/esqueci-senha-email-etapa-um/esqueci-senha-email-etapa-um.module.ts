import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaEmailEtapaUmPageRoutingModule } from './esqueci-senha-email-etapa-um-routing.module';

import { EsqueciSenhaEmailEtapaUmPage } from './esqueci-senha-email-etapa-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciSenhaEmailEtapaUmPageRoutingModule
  ],
  declarations: [EsqueciSenhaEmailEtapaUmPage]
})
export class EsqueciSenhaEmailEtapaUmPageModule {}
