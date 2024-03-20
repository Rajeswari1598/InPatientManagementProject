import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-products-rou',
  templateUrl: './products-rou.component.html',
  styleUrl: './products-rou.component.css'
})
export class ProductsRouComponent  {
  constructor(private ref:ActivatedRoute,private data:ApiDataService){}
  public categoryName:string|null='';
  public catego:any[]=[];
  ngOnInit():void{
  this.categoryName=this.ref.snapshot.paramMap.get('cate');
  this.send(this.categoryName);
  }
  send(categoryName:any){
    this.data.getCatebyCategoryName(categoryName).subscribe(
      (items)=>{
        this.catego=items;
      }
    )
  }
}
