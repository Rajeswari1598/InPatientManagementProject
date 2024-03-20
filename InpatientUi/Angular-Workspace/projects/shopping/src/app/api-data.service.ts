import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesComponent } from './categories/categories.component';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  getCatebyCategoryName: any;

  constructor(private http:HttpClient) { }
  getCategories().observable<any[]>{
    return this.http.get<any[]>(`https://fakestoreapi.com/products/categories`)
  }
  getCatebyCategoryName(cate:any):Observable<any[]>{
    return this.http.get<any[]>(`https://fakestoreapi.com/products/category/${cate}`)
  }
}
