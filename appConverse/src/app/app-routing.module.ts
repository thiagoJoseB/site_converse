import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-dados',
    loadChildren: () => import('./pages/cadastro-dados/cadastro-dados.module').then( m => m.CadastroDadosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'esqueci-senha-email-etapa-um',
    loadChildren: () => import('./pages/esqueci-senha-email-etapa-um/esqueci-senha-email-etapa-um.module').then( m => m.EsqueciSenhaEmailEtapaUmPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
