import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  nome: string;

  constructor() {
    // this.nome = 'Tiago';
   }

  ngOnInit(): void {
  }

  // setNome(nome: string) {
  //   this.nome = nome;
  // }

}
