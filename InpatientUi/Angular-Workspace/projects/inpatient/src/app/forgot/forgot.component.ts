import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RoomtypeDetailsService } from '../services/roomtype-details.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css',
})
export class ForgotComponent implements OnInit {
  public email: string = '';
  public otp: string = '';
  forgotForm!: FormGroup;
  public user: any[] | undefined;
  constructor(
    private fb: FormBuilder,
    private service: RoomtypeDetailsService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}
  generateOTP() {
    this.email = this.forgotForm.get('email')?.value;

    this.service.sendOtp(this.email).subscribe(
      (response) => {
        this.user = response;

        Swal.fire({
          title: 'Success',
          text: 'Otp sent  successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });

        this.router.navigate(['/otp']);
      },
      (error) => {
        console.log('Error sending OTP: ', error);
      }
    );
  }
}
