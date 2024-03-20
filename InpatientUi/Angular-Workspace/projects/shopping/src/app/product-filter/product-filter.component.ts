import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
   templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
@Input() public eleCount:number=0;
@Input() public jewCount:number=0;
@Input() public menCount:number=0;
@Input() public womCount:number=0;
@Output() public productfilterEvent:EventEmitter<string>=new EventEmitter();

sendeleData(e:any){
  this.productfilterEvent.emit(e.target.name)
}
sendjweData(e:any){
  this.productfilterEvent.emit(e.target.name)
}
sendmenData(e:any){
  this.productfilterEvent.emit(e.target.name)
}
sendwomenData(e:any){
  this.productfilterEvent.emit(e.target.name)
}

}
