import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {
  showSubtopics: boolean = false;
 
  toggleSubtopics() {
    this.showSubtopics = !this.showSubtopics;
  }
}
