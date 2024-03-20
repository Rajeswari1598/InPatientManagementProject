import { Component } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css',
})
export class EnquiryComponent {
  patientDetails: any[] = [];
  name: string;
  constructor(private enquiryService: EnquiryService) {
    this.name = '';
  }

  getDetails(): void {
    console.log(this.name);
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(this.name)) {
      return;
    }
    this.enquiryService.getDetails(this.name).subscribe(
      (patientDetails: any[]) => {
        this.patientDetails = patientDetails;
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }
}
