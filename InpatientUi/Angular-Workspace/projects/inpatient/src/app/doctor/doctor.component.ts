import { Component } from '@angular/core';
import { Doctor } from '../../Model/doctor.model';
import { Department } from '../../Model/department.model';
import { DoctorService } from '../services/doctor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
})
export class DoctorComponent {
  doctors: any[] = [];
  doctorName: '';

  departments: Department[] = [];
  newDoctor: Doctor = {
    id: 0,
    name: '',
    departmentId: 0,
    status: '',
  };
  showNewRow = false;
  editMode: boolean[] = [];

  name: string = '';
  page: number = 1;
  pageSize: number = 10;
  registrations: any[] = [];

  constructor(private doctorService: DoctorService) {
    this.doctorName = '';
  }

  ngOnInit(): void {
    this.loadDoctors();

    this.loadDepartments();
  }

  loadDoctors(): void {
    this.doctorService
      .getDetails()
      .subscribe((doctors) => (this.doctors = doctors));
  }

  loadDepartments(): void {
    this.doctorService
      .getAllDepartments()
      .subscribe((departments) => (this.departments = departments));
  }

  toggleEditMode(index: number): void {
    this.editMode[index] = !this.editMode[index];
  }

  isEditMode(index: number): boolean {
    return this.editMode[index];
  }

  saveDoctor(doctor: Doctor): void {
    this.doctorService.updateDoctor(doctor).subscribe(() => {
      Swal.fire({
        title: 'Saved!',
        text: 'Doctor Details updated Successfully.',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.loadDoctors();
    });
  }

  addNewDoctor(): void {
    this.showNewRow = true;
  }

  submitNewDoctor(id: number, name: string, departmentId: number): void {
    const regex = /^[A-Za-z]+$/;
    if (
      !regex.test(this.newDoctor.name) &&
      !regex.test(this.newDoctor.status)
    ) {
      Swal.fire({
        title: 'Ooops!',
        text: 'Failed to save.Please enter only characters.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    this.doctorService.addDoctor(this.newDoctor).subscribe(() => {
      Swal.fire({
        title: 'Saved!',
        text: 'Doctor Details Saved Successfully.',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.loadDoctors();
      this.newDoctor = {
        id: 0,
        name: '',
        departmentId: 0,
        status: '',
      };
      this.showNewRow = false;
    });
  }

  deletedoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor).subscribe(() => {});
  }
  getDepartmentName(departmentId: number): string {
    const department = this.departments.find((dep) => dep.id === departmentId);
    return department ? department.name : '';
  }

  loadRegistrations() {
    this.doctorService
      .getRegistrationsByDoctor(this.name, this.page, this.pageSize)
      .subscribe((data) => {
        this.registrations = data;
      });
  }
}
