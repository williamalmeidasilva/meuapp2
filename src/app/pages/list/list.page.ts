import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  alunos: string[] = ["José","Pedro","Camille","Luhan","Giovanna"];
  constructor() { }

  ngOnInit() {
  }
  excluir(aluno){
    console.log('Aluno ' + aluno + ' removido da lista');
  }
  alterar(aluno){
    console.log('Aluno ' + aluno + ' alterado da lista');
  }

}
