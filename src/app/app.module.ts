import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { Profile } from "../pages/profile/profile";
import { MapPage } from "../pages/map/map";
import { ListPage } from "../pages/list/list";
import { QRPage } from "../pages/qr/qr";
import { ModalPage } from "../pages/modal-page/modal-page";
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Locations } from "../providers/locations";
import { GoogleMaps } from "../providers/google-maps";
import { Connectivity } from "../providers/connectivity";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { DataServiceProvider } from '../providers/data.service';
import { AuthService } from './../providers/auth-service';



import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [MyApp, HomePage, MapPage, QRPage,Profile, ListPage, ModalPage, LoginPage,RegisterPage],
  imports: [IonicModule.forRoot(MyApp), HttpModule ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, MapPage,  QRPage,Profile, ListPage, LoginPage, RegisterPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Locations,
    GoogleMaps,
    Connectivity,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    Toast,
    AuthService,
    DataServiceProvider
  ]
})
export class AppModule {}
