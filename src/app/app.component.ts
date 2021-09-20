import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produit : Product[];
  title = 'inventory-app';
  // myform: FormGroup  ;

  // constructor(fb :FormBuilder) {
    constructor() {
    // form control
    // this.myform = fb.group({
    //   'sku':['ABC123']
    // });
    // form control
    this.produit  = [
      new Product(
      "MYSHOES",
       "Black Ronning shoes",
       '/assets/images/products/black-shoes.jpeg',
       ["men" ,"shoes" ,"Running Shoes"],
       239.99
      ),
      new Product(
        "NEATOJACKET",
         "Blue Jacket",
         '/assets/images/products/bleu-jacket.jpeg',
         ["women" ,"girl" ,"Jackets & Vests"],
         409.99
        ),
      new Product(
        "NICAT",
          "A nice black Hat",
          '/assets/images/products/black-hat.jpg',
          ["men" ,"girl" ,"Hat" ,"accessoires"],
          119.99
        )
    ]; 
  }
  

  productWasSelected(product: Product):void {
    console.log(`le produit ${ product.name} avec ${ product.sku}`);
  }
  
  // directives exemples
  testif : number = 0;
  testSwitchCase: number = 5;
  color: string ='';
  fontSize: string = '';
  isborderd: boolean = false;
  list_capital :string[] = [];
  list_est_habitant = [
     {
        city : 'Bujumbura Mairie',
        people: [
          {name: 'Jean', age:25, level:55},
          {name: 'Bosco', age:85, level:12},
          {name: 'Ciza', age:41, level:78},
          {name: 'Carmel', age:25, level:98},
        ]
     },
     {
      city : 'Gitega',
      people: [
        {name: 'Benoit', age:5, level:50},
        {name: 'Cordon', age:15, level:12},
        {name: 'Venant', age:4, level:61},
        {name: 'Primaire', age:10, level: 15},
      ],
     }
  ];

  apply(color:string, fontSize:string):void {
     console.log(`This is your color ${color} AND this is your font-size ${fontSize}`);
     this.color = color;
     this.fontSize = fontSize;
     this.isborderd = !this.isborderd;
     this.testif = 1;
     this.testSwitchCase = 6;
     this.list_capital = ['Buja', 'Ruyigi','Cankuzo','Matana','Rutana'];
  }

  // forms modules
 
  onSubmit(value: any):void {
    console.log('value Sub)mited ',value);
  }
}
