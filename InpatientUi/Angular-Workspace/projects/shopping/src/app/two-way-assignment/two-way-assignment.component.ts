import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-assignment',
  templateUrl: './two-way-assignment.component.html',
  styleUrl: './two-way-assignment.component.css'
})
export class TwoWayAssignmentComponent {
  public employeename:string='rao';
  public employeeId:number=10;
  public employeeAge:number=20;
  public employeeGender:string='male';
  public employeeSalary:number=200;
  public employeeDesignation:string='manager';
  public employeePhone:number=453456778;
  public employeePassword:string='sdfghj';
  public employeeEmail:string='szdxfgchbj';
  public employeeAddress:string='sdfghj';
}
