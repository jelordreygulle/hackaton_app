import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { Profile } from '../profile/profile';
import { QRPage } from '../qr/qr';
import { AuthService } from '../../providers/auth-service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  username = '';
  email = '';
  
  tab1Root: any = MapPage;
  tab2Root: any = ListPage;
  tab3Root: any = QRPage;
  tab4Root: any = Profile;
 
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}