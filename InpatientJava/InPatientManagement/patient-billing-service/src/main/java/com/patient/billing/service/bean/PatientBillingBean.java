package com.patient.billing.service.bean;
import java.time.LocalDate;

public class PatientBillingBean {
	private int billId;
	private LocalDate billingDate;
	private int bedAllocationId;
	private double paidAmount;
	private double discount;
	private double totalAmount;
	private double remainingAmount;
	private String paymentStatus;
	private String status;
	
	
	public PatientBillingBean(int billId, LocalDate billingDate, int bedAllocationId, double paidAmount,


			double discount, double totalAmount, double remainingAmount, String paymentStatus) {


		super();
		this.billId = billId;
		this.billingDate = billingDate;
		this.bedAllocationId = bedAllocationId;
		this.paidAmount = paidAmount;
		this.discount = discount;
		this.totalAmount = totalAmount;
		this.remainingAmount = remainingAmount;
		this.paymentStatus = paymentStatus;
		//this.status = status;
	}
	public int getBillId() {
		return billId;
	}
	public void setBillId(int billId) {
		this.billId = billId;
	}
	public LocalDate getBillingDate() {
		return billingDate;
	}
	public void setBillingDate(LocalDate billingDate) {
		this.billingDate = billingDate;
	}
	public int getBedAllocationId() {
		return bedAllocationId;
	}
	public void setBedAllocationId(int bedAllocationId) {
		this.bedAllocationId = bedAllocationId;
	}
	public double getPaidAmount() {
		return paidAmount;
	}
	public void setPaidAmount(double paidAmount) {
		this.paidAmount = paidAmount;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public double getRemainingAmount() {
		return remainingAmount;
	}
	public void setRemainingAmount(double remainingAmount) {
		this.remainingAmount = remainingAmount;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public PatientBillingBean() {
		super();
	}

	@Override
	public String toString() {
		return "PatientBillingBean [billId=" + billId + ", billingDate=" + billingDate + ", bedAllocationId="
				+ bedAllocationId + ", paidAmount=" + paidAmount + ", discount=" + discount + ", totalAmount="
				+ totalAmount + ", paymentStatus=" + paymentStatus + ", status=" + status + "]";
	}
	

	

}
