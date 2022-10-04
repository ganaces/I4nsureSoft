import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { QuemsomosComponent } from './componentes/quemsomos/quemsomos.component';
import { SimulacaoComponent } from './componentes/simulacao/simulacao.component';
import { SinistroComponent } from './componentes/sinistro/sinistro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EsqueciComponent } from './componentes/esqueci/esqueci.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'quemsomos',component:QuemsomosComponent},
  {path:'simulacao',component:SimulacaoComponent},
  {path:'sinistro',component:SinistroComponent},
  {path:'esqueci',component:EsqueciComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
