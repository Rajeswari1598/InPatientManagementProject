import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

      // public reactiveformref=new FormGroup({
      //   Name:new FormControl(''),
      //   Age:new FormControl(0),
      //   Address:new FormGroup({
      //     City:new FormControl(''),
      //     Pincode:new FormControl('')
      //   })
      // })
      constructor(private b:FormBuilder){}
      public reactiveformref=this.b.group({
        Name:this.b.control('siva',[Validators.required,Validators.minLength(4)]),
        Age:this.b.control(13),
        Address:this.b.group({
          City:this.b.control('hyd'),
          Pincode:this.b.control('assd')
        })
      })
      get City(){
        return this.reactiveformref.controls.Address.controls.City
      }
      get Pincode(){
        return this.reactiveformref.controls.Address.controls.Pincode
      }
}
