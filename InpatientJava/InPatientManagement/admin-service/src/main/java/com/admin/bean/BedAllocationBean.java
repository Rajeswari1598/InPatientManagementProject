package com.admin.bean;

import java.sql.Date;

public class BedAllocationBean {

	private int id;
	private int patientId;
	private long noOfDays;
	private BedBean bedId;
	private Date startDate;
	private Date endDate;
	private String status;
	private String patientNumber;

	public BedAllocationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BedAllocationBean(int id, int patientId, long noOfDays, BedBean bedId, Date startDate, Date endDate,
			String status, String patientNumber) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.noOfDays = noOfDays;
		this.bedId = bedId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.patientNumber = patientNumber;
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

	public long getNoOfDays() {
		return noOfDays;
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

	public String getPatientNumber() {
		return patientNumber;
	}

	public void setPatientNumber(String patientNumber) {
		this.patientNumber = patientNumber;
	}

	public void setNoOfDays(long noOfDays) {
		this.noOfDays = noOfDays;
	}

	@Override
	public String toString() {
		return "BedAllocationBean [id=" + id + ", patientId=" + patientId + ", noOfDays=" + noOfDays + ", bedId="
				+ bedId + ", startDate=" + startDate + ", endDate=" + endDate + ", status=" + status
				+ ", patientNumber=" + patientNumber + "]";
	}

}
