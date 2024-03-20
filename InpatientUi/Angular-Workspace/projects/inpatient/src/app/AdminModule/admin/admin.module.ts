import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from '../../departmentlist/departmentlist.component';
import { WardComponent } from '../../ward/ward.component';
import { BedComponent } from '../../bed/bed.component';
import { RoomComponent } from '../../room/room.component';
import { AddroomComponent } from '../../addroom/addroom.component';
import { RoomKindComponent } from '../../room-kind/room-kind.component';
import { EditroomComponent } from '../../editroom/editroom.component';
import { DoctorComponent } from '../../doctor/doctor.component';
import { AdminComponent } from '../../admin/admin.component';
import { FacilitiesComponent } from '../../facilities/facilities.component';



@NgModule({
  declarations: [
    // AdminComponent,
    // FacilitiesComponent,
    // DepartmentListComponent,
    // WardComponent,
    // BedComponent,
    // RoomComponent,
    // AddroomComponent,
    // RoomKindComponent,
    // EditroomComponent,
    // DoctorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
