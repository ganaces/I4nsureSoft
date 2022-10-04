import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { QuemsomosComponent } from './componentes/quemsomos/quemsomos.component';
import { SinistroComponent } from './componentes/sinistro/sinistro.component';
import { SimulacaoComponent } from './componentes/simulacao/simulacao.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EsqueciComponent } from './componentes/esqueci/esqueci.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    QuemsomosComponent,
    SinistroComponent,
    SimulacaoComponent,
    InicioComponent,
    EsqueciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
