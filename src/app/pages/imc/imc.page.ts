import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
altura: number = 0;
peso: number = 0;
imc: number = 0;
  constructor() { }

  ngOnInit() {
  }
  calcular(){

  }

}
