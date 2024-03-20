import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Department } from '../../Model/department.model';
import { DepartmentService } from '../services/department.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrl: './departmentlist.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments!: Department[];
  newDepartment: Department = {
    id: null,
    name: '',
    status: '',
  };
  showNewRow = false;
  editMode: boolean[] = [];
  public pageSize: number = 4;
  public currentPage = 1;
  public totalItems = 0;

  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.getAll();
  }

  addNewRow(): void {
    console.log('Adding new row');
    this.showNewRow = true;
  }

  toggleEditMode(index: number): void {
    this.editMode[index] = !this.editMode[index];
  }

  isEditMode(index: number): boolean {
    return this.editMode[index];
  }

  private showSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar']; // Add your custom class for styling
    config.duration = 2000;
    config.verticalPosition = 'top';
    this.snackBar.open(message, '', config);
  }

  submitNewDepartment(): void {
    const regex = /^[A-Za-z]+$/;
    if (
      !regex.test(this.newDepartment.name) &&
      !regex.test(this.newDepartment.status)
    ) {
      Swal.fire({
        title: 'Ooops!',
        text: 'Failed to save.Please enter only characters.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    this.departmentService.saveDepartment(this.newDepartment).subscribe(
      () => {
        Swal.fire({
          title: 'Saved!',
          text: 'Department added successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.loadDepartments();
        this.newDepartment = { id: 0, name: '', status };
        this.showNewRow = false;
        this.showSnackBar('Saved Successfully');
      },
      (error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Department Already exists',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        this.showSnackBar('the Department already exists');
      }
    );
  }

  loadDepartments(): void {
    this.departmentService
      .getAllDepartments(this.pageSize, this.currentPage)
      .subscribe((departments) => {
        this.departments = departments;
        this.editMode = Array(departments.length).fill(false);
      });
  }

  editDepartment(index: number): void {
    const department = this.departments[index];
    if (department?.id !== undefined && department?.id !== null) {
      this.departmentService
        .updateDepartment(department.id, department)
        .subscribe(
          (updatedDepartment) => {
            this.loadDepartments();
          },
          (error) => {
            console.error('Error updating department:', error);
          }
        );
    } else {
      console.error('Invalid department or department ID is null');
    }
  }

  deleteDepartment(department: Department): void {
    this.departmentService.deleteDepartment(department).subscribe(
      () => {
        this.loadDepartments();
      },
      (error) => {
        console.error('Error deleting department:', error);
      }
    );
  }
  getAll() {
    this.departmentService
      .getAllDepartments(this.pageSize, this.currentPage)
      .subscribe((data) => {
        this.departments = data;

        this.totalItems = data.length;
        this.departments = data.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      });
  }

  onPageChange(event: number): void {
    if (event >= 1 && event <= Math.ceil(this.totalItems / this.pageSize)) {
      this.currentPage = event;
      this.getAll();
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
