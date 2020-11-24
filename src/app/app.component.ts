import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Card',
      url: 'card',
      icon: 'journal'
    },
    {
      title: 'Buttons',
      url: 'buttons',
      icon: 'globe'
    },
    {
      title: 'Inputs',
      url: 'inputs',
      icon: 'file-tray'
    },
    {
      title: 'Formulario',
      url: 'formulario', //rotas
      icon: 'book'
    },
    {
      title: 'Navegação', //navegar entre paginas
      url: 'pagina1',
      icon: 'newspaper'
    },
    {
      title: 'list', //navegar entre paginas
      url: 'list',
      icon: 'newspaper'
    },
    {
      title: 'IMC', //navegar entre paginas
      url: 'imc',
      icon: 'calc'
    },
    
  ];
  public labels = ['Alunos', 'TI88'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
