import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 public product:any={};
 public electronicscount:number=0;
 public jewellerycount:number=0;
 public mensclothingcount:number=0;
 public womensclothingcount:number=0;

 ngOnInit(){
 this.Loadproducts("https://fakestoreapi.com/products");
 }
public Loadproducts(url:any):any{
  fetch(url)
  .then(res=> res.json())
  .then(items=>{
    this.product=items;
    this.electronicscount=items.filter(function(product:any){
      return product.category=='electronics'
    }).length;
    this.jewellerycount=items.filter(function(product:any){
      return product.category=='jewelery'
    }).length;
    this.mensclothingcount=items.filter(function(product:any){
      return product.category=="men's clothing"
    }).length;
    this.womensclothingcount=items.filter(function(product:any){
      return product.category=="women's clothing"
    }).length;
  })
 }

 sendData(e:any){
  console.log("value"+e);
  this.Loadproducts("https://fakestoreapi.com/products/category/${e}")
    }


}
