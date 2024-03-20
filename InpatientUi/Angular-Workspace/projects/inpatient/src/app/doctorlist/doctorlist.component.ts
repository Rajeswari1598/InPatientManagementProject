import { Component } from '@angular/core';
import { Doctor } from '../../Model/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrl: './doctorlist.component.css',
})
export class DoctorlistComponent {
  doctors: Doctor[] = [];
  doctorName: '';
  patientDetails: any[] = [];

  constructor(private doctorService: DoctorService) {
    this.doctorName = '';
  }
  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  getPatientsByDoctor(): void {
    this.doctorService
      .getPatients(this.doctorName)
      .subscribe((patientDetails) => {
        this.patientDetails = patientDetails;
      });
  }
}
