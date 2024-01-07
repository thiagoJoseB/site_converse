import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaEmailEtapaDoisPageRoutingModule } from './esqueci-senha-email-etapa-dois-routing.module';

import { EsqueciSenhaEmailEtapaDoisPage } from './esqueci-senha-email-etapa-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciSenhaEmailEtapaDoisPageRoutingModule
  ],
  declarations: [EsqueciSenhaEmailEtapaDoisPage]
})
export class EsqueciSenhaEmailEtapaDoisPageModule {}
