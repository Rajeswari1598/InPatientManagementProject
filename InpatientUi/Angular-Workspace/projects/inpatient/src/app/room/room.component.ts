import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../../Model/room.model';
import { RoomType } from '../../Model/roomkind.model';
import { Ward } from '../../Model/ward.model';
import { PopupsComponent } from '../popups/popups.component';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent implements OnInit {
  public combinedDetails: any[] = [];
  public roomKind: any[] = [];
  public pageSize: number = 4;
  public currentPage = 1;
  public totalItems = 0;

  roomFormtype!: FormGroup;

  popupMessage: string = 'Deleted sucessfully';

  constructor(
    private service: RoomService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getDetails();
  }

  addrooms() {}
  roomType() {
    this.service.getAllRoomTypes().subscribe((data) => {
      this.roomKind = data.filter((item) => item.status === 'Active');
    });
  }
  getDetails() {
    this.service
      .getAllDetails(this.pageSize, this.currentPage)
      .subscribe((data) => {
        this.combinedDetails = data;

        this.totalItems = data.length;
        this.combinedDetails = data.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      });
  }
  delete(room: Room) {
    room.id;
    const roomObject: Room = {
      id: room.id,
      availability: room.availability,
      roomNo: room.roomNo,
      roomPrice: room.roomPrice,
      roomSharing: room.roomSharing,
      roomTypeId: room.roomTypeId,
      status: room.status,
      wardId: room.wardId,
    };
    this.service.deleteRoom(roomObject).subscribe((data) => {
      console.log('deleted successfully');
      this.openPopup(roomObject);
    });
  }

  openPopup(room: Room): void {
    const dialogRef = this.dialog.open(PopupsComponent, {
      width: '250px',
      data: { message: this.popupMessage },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete(room);
      } else {
        console.log('Deletion cancelled');
      }
    });
  }

  onPageChange(event: number): void {
    if (event >= 1 && event <= Math.ceil(this.totalItems / this.pageSize)) {
      this.currentPage = event;
      this.getDetails();
    }
  }
  calculateTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  isPreviousButtonDisabled(): boolean {
    return this.currentPage === 1;
  }

  isNextButtonDisabled(): boolean {
    return this.currentPage === Math.ceil(this.totalItems / this.pageSize);
  }
}
function openPopup() {
  throw new Error('Function not implemented.');
}
