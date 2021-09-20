import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector: 'product-image',
    templateUrl: './product-image.component.html',
    styleUrls: ['./product-image.component.css']
})

export class ProductImageComponent implements OnInit {
   @Input() image: string ;
   @HostBinding('attr.class') cssClass = 'ui small image';

   constructor() {
       this.image = '';
   }

    ngOnInit() {

    }
}