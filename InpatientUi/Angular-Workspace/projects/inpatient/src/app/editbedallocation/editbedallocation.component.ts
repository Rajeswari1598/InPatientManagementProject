import { Component } from '@angular/core';
import { Details } from '../../Model/bedallocationdetails.model';
import { RoomRegisterService } from '../services/bedallocation.service';
@Component({
  selector: 'app-editbedallocation',
  templateUrl: './editbedallocation.component.html',
  styleUrl: './editbedallocation.component.css',
})
export class EditbedallocationComponent {
  public patientNumber: string = '';
  details!: Details;
  bedAllocation: any = {};

  constructor(private res: RoomRegisterService) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    console.log('hello', this.patientNumber);
    this.res
      .getDetailsOfAllocation(this.patientNumber)
      .subscribe((data: any) => {
        this.bedAllocation = data;
        this.details = {
          bedNo: data.bedId.bedNo,
          roomNo: data.bedId.roomId.roomNo,
          wardName: data.bedId.roomId.wardId.name,
          departmentName: data.bedId.roomId.wardId.departmentId.name,
          startDate: data.startDate,
          endDate: data.endDate,
          status: data.status,
        };
      });
  }

  updateDetails() {
    this.bedAllocation.startDate = this.details.startDate;
    this.bedAllocation.endDate = this.details.endDate;
    this.bedAllocation.status = this.details.status;

    this.res
      .updateBedAllocation(this.bedAllocation)
      .subscribe(() => console.log('updated successfully'));
  }
}
