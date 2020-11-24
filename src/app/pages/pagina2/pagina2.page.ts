import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private navControl: NavController,
    private actionSheetControl: ActionSheetController
    ) { }

  ngOnInit() {
  }
  voltarPagina1(){
    this.navControl.navigateBack("pagina1");
  }
  async actionSheet(){
    this.actionSheetControl.create()
    const actionSheet = await this.actionSheetControl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
      text: 'Bota Fora',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
      console.log('Mandei pro mato clicked');        
    }
  }, {
    text: 'Share',
    icon: 'share',
    handler: () => {
    console.log('Share clicked');
    }
  },{ 
    text: 'Play (open modal)',
    icon: 'caret-forward-circle',
    handler: () => {
    console.log('Play clicked');
    }
   },{
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
    console.log('Favoritei');
    }
  }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
    console.log('Cancel clicked');
    }
  }]
 });
  await actionSheet.present();
}
}


