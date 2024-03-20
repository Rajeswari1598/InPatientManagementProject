import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomtypeDetailsService } from '../services/roomtype-details.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  public details: any = {};
  public billId: string | null = '';
  public data: any = {};
  public s: any = {};

  constructor(
    private billing: FormBuilder,
    private ref: ActivatedRoute,
    private service: RoomtypeDetailsService,
    private router: Router
  ) {}

  public billingForm!: FormGroup;

  ngOnInit(): void {
    this.billId = this.ref.snapshot.paramMap.get('id');
    this.getBillingdetails(this.billId);
  }

  getBillingdetails(billId: any) {
    this.service.billingDetailsById(billId).subscribe((data) => {
      this.details = data;

      this.initBillingForm(this.details);
    });
  }

  initBillingForm(data?: any) {
    // alert("bed allocation id:"+data)
    // alert("billId"+this.details.billId)

    this.billingForm = this.billing.group({
      // billId:[{value: this.details.billId}, Validators.required],

      billId: [this.details.billId, Validators.required],
      bedAllocationId: [this.details.bedAllocationId, Validators.required],
      paidAmount: this.billing.control(
        data.paidAmount || '',
        Validators.required
      ),
      discount: this.billing.control(data.discount || ''),
      totalAmount: [this.details.totalAmount, Validators.required],
      paymentStatus: this.billing.control(
        data.paymentStatus || '',
        Validators.required
      ),
      // bedAllocationId:[{value: this.details.bedAllocationId , disabled:true}, Validators.required],
      // paidAmount: this.billing.control(data.paidAmount || "", Validators.required),
      // discount: this.billing.control(data.discount || ""),
      // totalAmount: [{ value: this.details.totalAmount, disabled: true }, Validators.required],
      // paymentStatus: this.billing.control(data.paymentStatus || "", Validators.required),
    });
  }
  submit() {
    if (this.billingForm.valid) {
      // alert(this.details.billId);
      console.log(this.billingForm.value);
      this.data = this.billingForm.value;
      alert(JSON.stringify(this.data));
      this.s = JSON.stringify(this.data);
      console.log(this.s);

      this.service.storeBillingDetails(this.s).subscribe((items) => {
        console.log('update successfull ' + items),
          // alert("i"+items);
          this.router.navigate(['/billing']);
        (error: any) => console.log('update unsuccessfull');
      });
    }
  }
}
