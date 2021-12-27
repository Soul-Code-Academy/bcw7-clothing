import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {LOCALE_ID} from '@angular/core'
import localePt from '@angular/common/locales/pt'
import {registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { CardsComponent } from  './componentes/cards/cards.component';

registerLocaleData(localePt)

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastrarComponent,
    CardsComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
