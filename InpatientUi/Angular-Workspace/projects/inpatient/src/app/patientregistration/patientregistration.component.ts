import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Department } from '../../Model/department.model';
import { Doctor } from '../../Model/doctor.model';
import { Patient } from '../../Model/patient.module';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrl: './patientregistration.component.css'
})
export class PatientregistrationComponent implements OnInit {
  registrationForm: FormGroup=new FormGroup({});
  doctors: Doctor[] = []; // Array to hold doctors data
  newPatient:Patient={
      patientid: 0,
      firstName: '',
      lastName: '',
      patientGender: '',
      patientAge: 0,
      patientContactNo: 0,
      patientAlternteContactNo: 0,
      patientNumber:'',
      doctorBean:{id:0,name:'',departmentId:0,status:''}
    }; // Initialize newPatient with default values
  patientNumber!: string;
  

  constructor(private fb: FormBuilder, private service:PatientService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDoctors();
  }

  initForm(): void {
    this.registrationForm = this.fb.group({
      firstName:this.fb.control ('', Validators.required),
      lastName:this.fb.control ('', Validators.required),
      patientAge:this.fb.control ('', Validators.required),
      patientGender:this.fb.control ('', Validators.required),
      // patientContactNo:this.fb.control ('',[Validators.required,Validators.pattern("^[6-9]\d{9}$")]),
      patientContactNo:this.fb.control ('', [Validators.required, Validators.pattern("^[6-9]\\d{9}$")]),
      patientNumber:this.fb.control(''),
      patientAlternteContactNo: this.fb.control ('',[Validators.required,Validators.pattern("^[6-9]\\d{9}$")]),
      doctorBean: this.fb.control ('', Validators.required)
    });
  }

  loadDoctors(): void {
    this.service.getAlldoctor().subscribe(
      (doctors: Doctor[]) => {
        this.doctors = doctors;
        console.log('doctor:',doctors)
      },
      (error) => {
        console.error('Error loading doctors:', error);
      }
    );
  }

  onSubmit(): void {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
        const formData = this.registrationForm.value;
        this.newPatient.firstName = formData.firstName;
        this.newPatient.lastName = formData.lastName;
        this.newPatient.patientAge = formData.patientAge;
        this.newPatient.patientGender = formData.patientGender;
        this.newPatient.patientContactNo = formData.patientContactNo;
        this.newPatient.patientAlternteContactNo = formData.patientAlternteContactNo;
        this.newPatient.patientNumber = formData.patientNumber;
        this.newPatient.doctorBean = formData.doctorBean;
        
        // Call the service method to save the patient

        this.newPatient.patientNumber=this.service.generatePatientNo();
        // alert(JSON.stringify(this.newPatient))
        this.service.savePatient(this.newPatient).subscribe(
            (res) => {
                console.log(res);
                // Assuming res contains the patient number, update it accordingly
                // this.patientNumber=this.service.generatePatientNo();
                this.patientNumber = res.patientNumber;
                Swal.fire({
                  title: 'Registration successfully!',
                  text: 'Patient Number is  '+this.patientNumber,
                  icon: 'success',
                  confirmButtonText: 'Ok',
               })

             this.router.navigate(["dashboard"])
            },
            (error) => {
                console.error('Error saving patient:', error);
            }
        );
    } else {
        console.error('Form is invalid. Cannot submit.');
    }
}


  // savePatient(patient: Patient): void {
  //   this.service.savePatient(patient).subscribe(
  //     () => {
  //       console.log('Patient saved successfully.');
  //       // Reset form after successful submission
  //       this.registrationForm.reset();
  //       // this.newPatient = new patient(); // Reset newPatient to default values
  //     },
  //     (error) => {
  //       console.error('Error saving patient:', error);
  //     }
  //   );
  // }
}

