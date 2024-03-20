import { Component } from '@angular/core';
import { RoomType } from '../../Model/roomkind.model';
import { RoomKindService } from '../services/room-kind.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room-kind',
  templateUrl: './room-kind.component.html',
  styleUrl: './room-kind.component.css',
})
export class RoomKindComponent {
  roomTypes!: RoomType[];
  newRoomType: RoomType = { id: null, name: '', status: '' };
  showNewRow = false;
  editMode: boolean[] = [];

  constructor(private roomTypeService: RoomKindService) {}

  ngOnInit(): void {
    this.loadRoomTypes();
  }

  addNewRow(): void {
    this.showNewRow = true;
  }

  toggleEditMode(index: number): void {
    this.editMode[index] = !this.editMode[index];
  }

  isEditMode(index: number): boolean {
    return this.editMode[index];
  }

  submitNewRoomType(): void {
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(this.newRoomType.name)) {
      Swal.fire({
        title: 'Ooops!',
        text: 'Failed to save.Please enter only characters.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });

      return;
    }
    this.roomTypeService.saveRoomType(this.newRoomType).subscribe(
      () => {
        Swal.fire({
          title: 'Saved!',
          text: 'RoomType Saved successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.loadRoomTypes();
        this.newRoomType = { id: 0, name: '', status: '' };
        this.showNewRow = false;
      },
      (error) => {
        console.error('Error saving department:', error);
        Swal.fire({
          title: 'Oops!',
          text: 'RoomType Already exists',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }

  loadRoomTypes(): void {
    this.roomTypeService.getAllRoomTypes().subscribe((roomTypes) => {
      this.roomTypes = roomTypes;
      this.editMode = Array(roomTypes.length).fill(false);
    });
  }

  editRoomType(index: number): void {
    const roomType = this.roomTypes[index];
    if (roomType?.id !== undefined && roomType?.id !== null) {
      this.roomTypeService.updateRoomType(roomType.id, roomType).subscribe(
        (updatedRoomType) => {
          this.loadRoomTypes();
        },
        (error) => {
          console.error('Error updating room type:', error);
        }
      );
    } else {
      console.error('Invalid room type or room type ID is null');
    }
  }

  deleteRoomType(roomType: RoomType): void {
    this.roomTypeService.deleteRoomType(roomType).subscribe(
      () => {
        this.loadRoomTypes();
      },
      (error) => {
        console.error('Error deleting room type:', error);
      }
    );
  }
}
