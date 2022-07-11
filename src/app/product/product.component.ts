import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
title="Ürün Listesi";
filterText ="";
products: Product[]= [
  {id:1, name:"Laptop", price:2500, categoryId:1, description:"asus zenbook",imageUrl:"https://productimages.hepsiburada.net/s/128/550/110000079060034.jpg/format:webp"},
  {id:2, name:"mouse", price:25, categoryId:2, description:"A4 tech",imageUrl:"https://productimages.hepsiburada.net/s/128/550/110000079060034.jpg/format:webp"},
  {id:3, name:"Laptop", price:2500, categoryId:3, description:"asus zenbook",imageUrl:"https://productimages.hepsiburada.net/s/128/550/110000079060034.jpg/format:webp"},
  {id:4, name:"mouse", price:25, categoryId:4, description:"A4 tech",imageUrl:"https://productimages.hepsiburada.net/s/128/550/110000079060034.jpg/format:webp"}
]
  ngOnInit(): void {
  }
  addToCart(product: { name: string; }){
    this.alertifyService.success(product.name+" added" )
  }
}
