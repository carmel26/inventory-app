import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'product-departement',
    templateUrl: './product-departement.component.html',
    styleUrls: ['./product-departement.component.css']
})

export class ProductDepartementComponent implements OnInit{
    @Input() departement_list : string[];

    constructor () {
        this.departement_list = [''];
    }
    ngOnInit(){

    }
}