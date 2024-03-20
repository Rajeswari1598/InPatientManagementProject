import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  // public number:any[]=[10,20];
  public num1:number=10;
  public num2:number=20;
  public option:string=''
}
