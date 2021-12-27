import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome:string;
  data:string;
  quantidade: number;
  valorTotal: number;
  cidade: string;
  cor: string;

  constructor() {
    this.nome = ''
    this.data = ''
    this.quantidade= 0
    this.valorTotal = 0
    this.cidade = ''
    this.cor =  ''

  }

  ngOnInit(): void {
  }
  valorFinal(){
    if(this.cidade == 'Buerarema'){
      this.valorTotal = (this.quantidade * 150) + 22
    }else{
      this.valorTotal = (this.quantidade * 150) + 56
    }

  }

}
