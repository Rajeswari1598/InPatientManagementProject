import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RoomtypeDetailsService } from '../services/roomtype-details.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.css',
})
export class PasswordChangeComponent implements OnInit {
  public securitycode: number = 0;
  passwordForm!: FormGroup;
  successmessage: any;
  password: string = '';
  newpassword: string = '';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private service: RoomtypeDetailsService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      enteredOtp: this.fb.control('', [
        Validators.required,
        Validators.pattern(/[6]/),
      ]),
      newpassword: this.fb.control('', [Validators.required]),
    });
  }

  passwordData() {
    this.email = this.passwordForm.get('email')?.value;
    this.newpassword = this.passwordForm.get('newpassword')?.value;

    this.service.password(this.email, this.newpassword).subscribe(
      (response) => {
        Swal.fire({
          title: 'Success',
          text: 'Otp verified  successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        // this.router.navigate(["/login"])
      },
      (error) => {
        Swal.fire({
          title: 'Success',
          text: 'password changed  successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['/login']);
      }
    );
  }
  patternValidator(regex: RegExp, error: any) {
    return (control: any) => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  createForm() {
    this.passwordForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }
  email: string = '';
  enteredOtp: string = '';
  verificationMessage: string = '';
  verifyOtp() {
    this.email = this.passwordForm.get('email')?.value;

    this.enteredOtp = this.passwordForm.get('enteredOtp')?.value;
    this.service.verifyOtp(this.email, this.enteredOtp).subscribe(
      (response) => {
        Swal.fire({
          title: 'Success',
          text: 'Otp verified  successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      },
      (error) => {
        console.error('Error verifying OTP:', error);
      }
    );
  }
  reset(): void {}
}
