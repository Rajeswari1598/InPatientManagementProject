import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BillingDto } from '../../Model/billingDto';
import { RoomtypeDetailsService } from '../services/roomtype-details.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent implements OnInit {
  public patientdetails: any[] = [];
  items: string[] = [];
  public pageSize: number = 2;
  public currentPage = 1;
  public totalItems = 0;
  public startDate: string = '';
  public endDate: string = '';
  public records: any[] = [];

  searchForm: FormGroup;
  constructor(
    private service: RoomtypeDetailsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: [''],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.startDate = params['startDate'] || null;
      this.endDate = params['endDate'] || null;
      this.filterData();
    });
  }
  filterData() {
    if (this.startDate || this.endDate) {
      this.service
        .filterDataByDateRange(
          this.pageSize,
          this.currentPage,
          this.startDate,
          this.endDate
        )
        .subscribe(
          (data: any[]) => {
            this.records = data;
            this.totalItems = data.length;
            this.records = data.slice(
              (this.currentPage - 1) * this.pageSize,
              this.currentPage * this.pageSize
            );
            this.router.navigate(['dashboard/admin/billing']);
          },
          (error) => {
            console.error('Error fetching filtered data:', error);
          }
        );
    } else {
      this.service
        .getAllDetails(this.pageSize, this.currentPage)
        .subscribe((data) => {
          this.records = data;

          this.totalItems = data.length;
          this.records = data.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          );
        });
    }
  }
  delete(room: BillingDto) {
    room.id;
    alert(JSON.stringify(room));
    const roomObject: BillingDto = {
      id: room.id,
      firstName: room.firstName,
      lastName: room.lastName,
      bedno: room.bedno,
      paidAmount: room.paidAmount,
      totalAmount: room.totalAmount,
      status: room.status,
      recordStatus: room.recordStatus,
    };
    // this.service.deleteRoom(roomObject).subscribe(data=>console.log("deleted successfully")
    // )
  }
  onPageChange(event: number): void {
    if (event >= 1 && event <= Math.ceil(this.totalItems / this.pageSize)) {
      this.currentPage = event;
      this.filterData();
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
