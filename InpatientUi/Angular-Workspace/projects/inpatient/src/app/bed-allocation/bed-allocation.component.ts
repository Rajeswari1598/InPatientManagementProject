import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Bed } from '../../Model/bed.model';
import { Department } from '../../Model/department.model';
import { Room } from '../../Model/room.model';
import { RoomType } from '../../Model/roomkind.model';
import { Ward } from '../../Model/ward.model';
import { RoomRegisterService } from '../services/bedallocation.service';
@Component({
  selector: 'app-bed-allocation',
  templateUrl: './bed-allocation.component.html',
  styleUrl: './bed-allocation.component.css',
})
export class BedAllocationComponent implements OnInit {
  public medicationNames: Department[] = [];
  wardNames: Ward[] = [];
  roomTypeNames: RoomType[] = [];
  roomNumbers: Room[] = [];
  bedNumbers: Bed[] = [];
  bed: any;

  medicationSelected: boolean = false;
  wardSelected: boolean = false;
  roomTypeSelected: boolean = false;
  roomSelected: boolean = false;
  bedSelected: boolean = false;
  form: FormGroup;

  constructor(
    private res: RoomRegisterService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      department: ['', Validators.required],
      ward: ['', Validators.required],
      roomType: ['', Validators.required],
      room: ['', Validators.required],
      bedNo: ['', Validators.required],
      patientId: ['', Validators.required],

      startDate: ['', Validators.required],
      endDate: ['', Validators.required],

      bedId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.res.getDetails().subscribe((data) => (this.medicationNames = data));
    this.res
      .getRoomTypeNames()
      .subscribe((data) => (this.roomTypeNames = data));
    throw new Error('Method not implemented');
  }
  onMedicationChange() {
    const selectedMedicationId = this.form.get('department')?.value;
    this.res.getWardNames(selectedMedicationId).subscribe((data) => {
      this.wardNames = data.filter((item) => item.availability > 0);
    });
    this.medicationSelected = true;
  }
  onWardChange() {
    const selectedWardId = this.form.get('ward')?.value;
    this.res.getRoomNumbers(selectedWardId).subscribe((data) => {
      this.roomNumbers = data.filter((item) => item.availability > 0);
    });
    this.wardSelected = true;
  }
  onRoomChange() {
    const roomId = this.form.get('room')?.value;
    this.res.getBedNumbers(roomId).subscribe((data) => {
      this.bedNumbers = data;

      this.bedNumbers = data.filter((item) => item.status === 'Empty');
    });
    this.roomTypeSelected = true;
  }
  onBedChange() {
    this.bedSelected = true;
    const bedId = this.form.get('bedNo')?.value;
  }
  onSubmit() {
    const selectedBedId = this.form.value.bedNo;

    this.bed = this.bedNumbers.find((bed) => bed.id == selectedBedId);

    if (this.bed) {
      const formData = {
        patientNumber: this.form.value.patientId,

        bedId: this.bed,
        noOfDays: this.form.value.noOfDays,
        startDate: this.form.value.startDate,
        endDate: this.form.value.endDate,
        status: this.form.value.status,
      };

      this.http
        .post('http://localhost:8083/bedAllocation/save', formData)
        .subscribe(
          (response) => {
            console.log('Form data sent successfully:', response);
            Swal.fire({
              title: 'Saved!',
              text: 'Bed is allocated.',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            //  this.router.navigate(['/dashboard'])
          },
          (error) => {
            console.error('Error sending form data:', error);
          }
        );
    }
  }
}
