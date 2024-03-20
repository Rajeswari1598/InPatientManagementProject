import { Component } from '@angular/core';
import { Bed } from '../../Model/bed.model';
import { Room } from '../../Model/room.model';
import { BedService } from '../services/bed.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrl: './bed.component.css',
})
export class BedComponent {
  beds: Bed[] = [];
  rooms: Room[] = [];
  newBed: Bed = { id: null, bedNo: null, status: '', roomId: null };
  showNewRow = false;
  editMode: boolean[] = [];

  constructor(private bedService: BedService) {}

  ngOnInit(): void {
    this.loadBeds();
    this.loadRooms();
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

  submitNewBed(): void {
    this.bedService.saveBed(this.newBed).subscribe(
      () => {
        Swal.fire({
          title: 'Saved!',
          text: 'Bed added successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.loadBeds();
        this.newBed = { id: null, bedNo: null, status: '', roomId: null };
        this.showNewRow = false;
      },
      (error) => {
        Swal.fire({
          title: 'Ooops!',
          text: 'Room you have choosen already filled completely',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    );
  }

  loadBeds(): void {
    this.bedService.getAllBeds().subscribe(
      (beds) => {
        this.beds = beds;
        this.editMode = Array(beds.length).fill(false);
      },
      (error) => {
        Swal.fire({
          title: 'Ooops!',
          text: 'Beds not available',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }

  loadRooms(): void {
    this.bedService.getAllRooms().subscribe(
      (rooms) => {
        this.rooms = rooms.filter((item) => item.status === 'Active');
      },
      (error) => {
        console.error('Error loading rooms:', error);
      }
    );
  }

  editBed(index: number): void {
    const bed = this.beds[index];
    if (bed?.id !== undefined && bed?.id !== null) {
      this.bedService.updateBed(bed.id, bed).subscribe(
        (updatedBed) => {
          this.loadBeds();
        },
        (error) => {
          console.error('Error updating bed:', error);
        }
      );
    } else {
      console.error('Invalid bed or bed ID is null');
    }
    this.editMode[index] = false;
  }

  deleteBed(id: number | null | undefined): void {
    if (id !== null && typeof id !== 'undefined') {
      this.bedService.deleteBed(id).subscribe(
        () => {
          this.beds = this.beds.filter((bed) => bed.id !== id);
          this.loadBeds();
        },
        (error) => {
          console.error('Error deleting bed:', error);
        }
      );
    }
  }
}
