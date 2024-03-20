import { Component,OnInit  } from '@angular/core';
import {Ward} from '../../Model/ward.model'
import { Department } from "../../Model/department.model";
import { WardService } from "../services/ward.service";
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrl: './ward.component.css'
})
export class WardComponent implements OnInit {
    wards: Ward[] = [];
   
    departments: Department[] = [];
    newWard: Ward = {
      id: 0,
      name: '',
      capacity: 0,
      availability: 0,
      status:'',
      departmentId : { id: 0, name: '',status:"" }
    };
    showNewRow = false;
    editMode: boolean[] = [];
  
    constructor(private wardService: WardService) {}
  
    ngOnInit(): void {
      this.loadWards();
      this.loadDepartments();
    }
  
    loadWards(): void {
      this.wardService.getAllWards()
        .subscribe(wards => {
          this.wards = wards;
          this.editMode = Array(wards.length).fill(false);
        });
    }
  
    loadDepartments(): void {
      this.wardService.getAllDepartments()
        .subscribe(departments => {this.departments = departments;
          this.departments = departments.filter(item => item.status==="Active")
        });
  
    }
  
    toggleEditMode(index: number): void {
      this.editMode[index] = !this.editMode[index];
    }
  
    isEditMode(index: number): boolean {
      return this.editMode[index];
    }
  
    saveWard(ward: Ward): void {
      this.wardService.updateWard(ward)
        .subscribe(() => {
          this.loadWards();
        });
    }
  
    addNewWard(): void {
      this.showNewRow = true;
    }
  
    submitNewWard(id: number, name: string, departmentId: Department): void {
      const regex = /^[A-Za-z]+$/;
      if (!regex.test(this.newWard.name)&&!regex.test(this.newWard.status)) {
        alert('Please enter only alphabetic characters for the name and status.');
        return; 
      }
      this.wardService.addWard(this.newWard)
        .subscribe(() => {
          Swal.fire({
            title: 'Saved!',
            text: 'Ward added successfully.',
            icon: 'success',
            confirmButtonText: 'Ok',
         });
          this.loadWards();
          this.newWard = {
            id: 0,
            name: '',
            capacity: 0,
            availability: 0,
            status:"",
            departmentId: { id : 0,
             name :'',status:""}
          },
          this.showNewRow = false;
        }, error => {
          Swal.fire({
            title: 'Ooops!',
            text: 'Failed to add ward. As that ward already exists.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });
    }
  
    deleteWard(ward:Ward): void {
     
      this.wardService.deleteWard(ward)
        .subscribe(() => {
          this.loadWards();
          
        });
    }
  
    getDepartmentName(departmentId: number): string {
      const department = this.departments.find(dep => dep.id === departmentId);
      return department ? department.name : '';
    }

  
  }
