import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController, private router: Router,) {}

  open(){
    this.router.navigate(['/people', {
      //id: video.id
    }]);
  }
}
