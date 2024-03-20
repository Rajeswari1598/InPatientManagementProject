package com.patient.billing.service.bean;



import java.sql.Date;

public class BedAllocationBean {

	private int id;
	private int patientId;
	private int noOfDays;
	private BedBean bedId;
	private Date startDate;
	private Date endDate;
	private String status;

	public BedAllocationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BedAllocationBean(int id, int patientId, int noOfDays, BedBean bedId, Date startDate, Date endDate,
			String status) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.noOfDays = noOfDays;
		this.bedId = bedId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public int getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}

	public BedBean getBedId() {
		return bedId;
	}

	public void setBedId(BedBean bedId) {
		this.bedId = bedId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "BedAllocationBean [id=" + id + ", patientId=" + patientId + ", noOfDays=" + noOfDays + ", bedId="
				+ bedId + ", startDate=" + startDate + ", endDate=" + endDate + ", status=" + status + "]";
	}

}
