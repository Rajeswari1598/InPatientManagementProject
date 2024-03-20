import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 constructor(private apidata:ApiDataService){}
 public Categories:any[]=[];
 ngOnInit():void{
  this.getCategories();
 }
 getCategories(){
  this.apidata.getCategories().subscribe
  (
    (data)=>{
      this.Categories=data;
    },
    (error)=>{
      console.error("data is not");
    })
 }
}
