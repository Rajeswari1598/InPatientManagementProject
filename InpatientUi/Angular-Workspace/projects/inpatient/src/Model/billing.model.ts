export class PatientBillingEntity{

    constructor(
        public billId:number,
        public billingDate:Date,
        public bedAllocationId:number,
        public paidAmount:number,
        public discount:number,
        public totalAmount:number,
        public paymentStatus:string
    ){}
}