import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../Model/room.model';
import { RoomService } from '../services/room.service';
import { Ward } from '../../Model/ward.model';
@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrl: './editroom.component.css',
})
export class EditroomComponent implements OnInit {
  details: any = {};
  data: any = {};
  roomForm!: FormGroup; // Initialize roomForm as a FormGroup
  rooms: any;
  wards: any;
  departments: any;
  roomType: any;
  ward: any;
  public id: any;

  constructor(
    private fb: FormBuilder,
    private service: RoomService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.loadRooms();
    this.loadWards();
    this.loadDepartments();
  }

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      roomNo: this.fb.control([Validators.required]),
      roomSharing: this.fb.control([Validators.required]),
      roomPrice: this.fb.control([Validators.required]),
      roomTypeId: [[Validators.required]],
      wardId: [Validators.required],
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.getRoomdetails(this.id);
  }

  getRoomdetails(roomId: any) {
    this.service.roomDetailsById(roomId).subscribe((data) => {
      this.details = data;
      this.roomForm.patchValue(this.details);
    });
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

  submit() {
    const roomTypeId = this.roomForm.value.roomTypeId;

    this.roomType = this.rooms.find(
      (roomType: { id: any }) => roomType.id == roomTypeId
    );

    const wardId = this.roomForm.value.wardId;

    this.ward = this.wards.find((ward: { id: any }) => ward.id == wardId);

    const roomId = this.route.snapshot.paramMap.get('id');
    const formData = {
      id: roomId,
      roomNo: this.roomForm.value.roomNo,
      roomSharing: this.roomForm.value.roomSharing,
      roomPrice: this.roomForm.value.roomPrice,
      roomTypeId: this.roomType,
      wardId: this.ward,
    };

    this.http.put('http://localhost:8083/room/update', formData).subscribe(
      (req) => {
        this.router.navigate(['dashboard/admin/rooms']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
