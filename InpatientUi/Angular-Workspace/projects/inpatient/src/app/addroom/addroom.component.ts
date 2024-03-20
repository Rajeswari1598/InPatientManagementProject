import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Department } from '../../Model/department.model';
import { Room } from '../../Model/room.model';
import { RoomType } from '../../Model/roomkind.model';
import { Ward } from '../../Model/ward.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrl: './addroom.component.css',
})
export class AddroomComponent implements OnInit {
  public id: number = 0;
  public department?: Department;

  wards: Ward[] = [];
  rooms: RoomType[] = [];
  roomTypeId!: Room;
  wardId!: Ward;

  departments: Department[] = [];
  d?: Department;
  roomType: any;
  ward: any;
  constructor(
    private room: FormBuilder,
    private service: RoomService,
    private router: Router,
    private http: HttpClient
  ) {
    this.loadRooms();
    this.loadWards();
    this.loadDepartments();
  }
  ngOnInit(): void {}

  public addRoomForm: FormGroup = this.room.group({
    roomNo: this.room.control(0, [Validators.required]),
    roomSharing: this.room.control(0, [Validators.required]),
    roomPrice: this.room.control(0, [Validators.required]),
    roomTypeId: this.room.control('', [Validators.required]),
    wardId: this.room.control('', [Validators.required]),
  });

  submit(): void {
    const roomTypeId = this.addRoomForm.value.roomTypeId;

    this.roomType = this.rooms.find(
      (roomType: { id: any }) => roomType.id == roomTypeId
    );

    const wardId = this.addRoomForm.value.wardId;

    this.ward = this.wards.find((ward: { id: any }) => ward.id == wardId);

    const formData = {
      roomNo: this.addRoomForm.value.roomNo,
      roomSharing: this.addRoomForm.value.roomSharing,
      roomPrice: this.addRoomForm.value.roomPrice,
      roomTypeId: this.roomType,
      wardId: this.ward,
    };
    this.http.post('http://localhost:8083/room/save', formData).subscribe(
      (req) => {
        Swal.fire({
          title: 'Saved!',
          text: 'Room added successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['dashboard/admin/rooms']);
      },
      (error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Ward you have choosen already filled',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }

  loadRooms(): void {
    this.service.getAllRoomTypes().subscribe((res: any) => {
      this.rooms = res;
    });
  }
  loadWards(): void {
    this.service.getAllByWard().subscribe((response: any) => {
      this.wards = response;
    });
  }
  loadDepartments(): void {
    this.service.getAllDepartments().subscribe((result: any) => {
      this.departments = result;
    });
  }
}
