import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BillingDto } from '../../Model/billingDto';
import { PatientDto } from '../../Model/patientDto';
import { RoomtypeDetailsService } from '../services/roomtype-details.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css',
})
export class AddpatientComponent implements OnInit {
  public details!: BillingDto;
  openSnackBar: any;
  bedAllocationId: number = 0;
  secondForm!: FormGroup;

  paidAmount: number = 1000;
  totalAmount: number = 0;
  remainingAmount: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private service: RoomtypeDetailsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.calculateTotalAmount();
  }

  patientForm!: FormGroup;
  billingForm!: FormGroup;
  submittedValue: string = '';

  showBillingForm = false;

  createForm() {
    this.patientForm = this.formBuilder.group({
      patientNumber: [, Validators.required],
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('values' + this.patientForm.value);

      this.submittedValue = this.patientForm.value.patientNumber;

      this.service.getNumber(this.submittedValue).subscribe(
        (data) => {
          this.details = data;
          this.initForm(data);
          this.showBillingForm = true;
        },
        (error) => {
          Swal.fire({
            title: 'Bed is Not allocated!',
            text: 'Bed is not allocated for this patient',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Patient numebr in valid',
        text: 'Enter correct patient number',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  }

  private initForm(data: PatientDto) {
    this.billingForm = this.formBuilder.group({
      firstName: [data.firstName, Validators.required],
      lastName: [data.lastName, Validators.required],
      patientAge: [data.patientAge, Validators.required],
      patientGender: [data.patientGender, Validators.required],
      patientContactNo: [data.patientContactNo, Validators.required],
      patientAlternateContactNo: [data.patientAlternateContactNo],
      noOfDays: [data.noOfDays, Validators.required],
      id: [data.id],
      startDate: [data.startDate, Validators.required],
      endDate: [data.endDate, Validators.required],
      status: [data.status, Validators.required],
      bedId: this.formBuilder.group({
        id: [data.bedId.id],
        bedNo: [data.bedId.bedNo, Validators.required],
        status: [data.bedId.status],
        roomId: this.formBuilder.group({
          id: [data.bedId.roomId?.id],
          roomNo: [data.bedId.roomId?.roomNo],
          roomSharing: [data.bedId.roomId?.roomSharing],
          roomPrice: [data.bedId.roomId?.roomPrice],
          roomTypeId: this.formBuilder.group({
            id: [data.bedId.roomId?.roomTypeId.id],
            name: [data.bedId.roomId?.roomTypeId.name],
          }),
          wardId: this.formBuilder.group({
            name: [data.bedId.roomId?.wardId?.name],
          }),
        }),
      }),
      totalAmount: [{ value: this.totalAmount }, Validators.required],
      paidAmount: [this.paidAmount, Validators.required],
      remainingAmount: [this.remainingAmount, Validators.required],
    });
    this.calculateTotalAmount();
    this.caluclateRemainingAmount();
  }

  calculateTotalAmount(): void {
    const noOfDays = this.billingForm.value.noOfDays;

    const roomPrice = this.billingForm.value.bedId.roomId.roomPrice;

    this.totalAmount = noOfDays * roomPrice;

    this.billingForm.get('totalAmount')?.setValue(this.totalAmount);
  }
  caluclateRemainingAmount() {
    this.remainingAmount = this.totalAmount - this.paidAmount;
    this.billingForm.get('remainingAmount')?.setValue(this.remainingAmount);
  }
  saveBillingForm() {
    this.calculateTotalAmount();
    this.caluclateRemainingAmount();

    this.service.saveBillingdetails(this.billingForm.value).subscribe(
      (data) => {
        Swal.fire({
          title: 'Saved!',
          text: 'Billing Details saved successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        //  this.router.navigate(["billing"]);
      },
      (error) => {
        console.log('error ocured');
      }
    );
  }
}
