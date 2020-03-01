import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ViewController, Modal, ModalController, ModalOptions
} from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Toast } from "@ionic-native/toast/ngx";
import { DataServiceProvider } from "../../providers/data.service";
import { Http } from "@angular/http";

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: "page-qr",
  templateUrl: "qr.html"
})
export class QRPage {
  products: any[] = [];
  selectedProduct: any;
  public items;
  productFound: boolean = false;
  productFound1: boolean = false;
  public itemsArray = [];
  newItem: any;
  price: any;
  test: any;
  notes: any = [
    {
      title: "test"
    }
  ];
  groceries: any;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private modal: ModalController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    public dataService: DataServiceProvider
  ) {
    this.dataService.getProducts().subscribe(response => {
      this.products = response;
      console.log(this.products);
    });
  }

  data: any;

  ionViewDidLoad() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get("https://sw-testing.azurewebsites.net/api/items")
        .map(res => res.json())
        .subscribe(data => {
          // this.data = this.applyHaversine(data.locations);
          this.test = data[0].name
          console.log("data1111:", this.test);
          // this.data.sort((locationA, locationB) => {
          //   return locationA.distance - locationB.distance;
          // });
          resolve(this.data);
        });
    });
  }

  load() {
    console.log("dddddddddd");
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.selectedProduct = this.products.find(
          product => product.plu === barcodeData.text
        );
        if (this.selectedProduct !== undefined) {
          this.productFound = true;
          console.log(this.selectedProduct);
        } else {
          this.selectedProduct = {};
          this.productFound = false;
          this.toast
            .show("Product not found", "5000", "center")
            .subscribe(toast => {
              console.log(toast);
            });
        }
      },
      err => {
        this.toast.show(err, "5000", "center").subscribe(toast => {
          console.log(toast);
        });
      }
    );
  }

  public changeItemName(currentName, index) {
    let alert = this.alertCtrl.create({
      title: "Change grocery item name:",
      message: 'current: "' + currentName + '"',
      inputs: [
        {
          placeholder: "type in a new name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Confirm",
          handler: data => {
            if (data[0].length === 0) {
              this.itemsArray[index] = currentName;
            } else {
              this.itemsArray[index] = data[0];
            }
          }
        }
      ]
    });
    alert.present();
  }
  myArray = []
  

  public addItem() {
    // let index = this.itemsArray.length;
    // this.changeItemName("New item", index);

    this.productFound1= true;

    console.log("this tessss" , this.test)

    let prompt = this.alertCtrl.create({
      title: "Add Item",
      message: "Enter the list of items",
      inputs: [
        {
          name: this.test,
          placeholder: "Item Name",
          value: this.test
        },
        {
          name: "quantity",
          placeholder: "Quantity",
          type: "number"
        },
        {
          name: "units",
          placeholder: "Grams, KG, Inches etc"
        },
        {
          name: "price",
          placeholder: "Price Name",
          type: "number"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Save",

          handler: data => {
            this.itemsArray.push({
              name: this.test,
              quantity: data.quantity,
              units: data.units,
              price: data.price,
              reward: 100
            });
            console.log(" this.itemsArray this.itemsArray this.itemsArray" ,  this.itemsArray)
          }

          
        }
      ]
    });
    prompt.present();
  }



  openModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }

  editNote(note) {
    let prompt = this.alertCtrl.create({
      title: "Edit Note",
      inputs: [
        {
          name: "title"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Save",
          handler: data => {
            let index = this.itemsArray.indexOf(note);

            if (index > -1) {
              this.itemsArray[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();
  }

  deleteNote(note) {
    let index = this.itemsArray.indexOf(note);

    if (index > -1) {
      this.itemsArray.splice(index, 1);
    }
  }
}
