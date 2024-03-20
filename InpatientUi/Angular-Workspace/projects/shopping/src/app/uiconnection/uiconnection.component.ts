import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-uiconnection',
  templateUrl: './uiconnection.component.html',
  styleUrl: './uiconnection.component.css'
})
export class UiconnectionComponent {
  submitDetails(data:any){
    alert(JSON.stringify(data))
  }
}
