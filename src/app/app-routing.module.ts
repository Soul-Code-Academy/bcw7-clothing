import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componentes/cards/cards.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';

const routes: Routes = [
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
  {path: 'cards', component: CardsComponent},
  {path: 'cadastro', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
