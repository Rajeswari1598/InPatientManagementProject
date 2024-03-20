package com.patient.billing.service.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bedAllocation")
public class BedAllocation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bed_allocation_id")
	private int id;
	@Column(name = "patient_id")
	private int patientId;
	@ManyToOne
	@JoinColumn(name = "bed_id",referencedColumnName = "bed_id")
	private BedEntity bedId;
	@Column(name = "no_of_days")
	private long noOfDays;
	@Column(name = "start_date")
	private Date startDate;
	@Column(name = "end_date")
	private Date endDate;
	@Column(name = "status")
	private String status;
    @Column(name="patient_number")
    private String patientNumber;
	public BedAllocation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BedAllocation(int id, int patientId, BedEntity bedId, long noOfDays, Date startDate, Date endDate,
			String status, String patientNumber) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.bedId = bedId;
		this.noOfDays = noOfDays;
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

	public BedEntity getBedId() {
		return bedId;
	}

	public void setBedId(BedEntity bedId) {
		this.bedId = bedId;
	}

	public long getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(long noOfDays) {
		this.noOfDays = noOfDays;
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

	@Override
	public String toString() {
		return "BedAllocation [id=" + id + ", patientId=" + patientId + ", bedId=" + bedId + ", noOfDays=" + noOfDays
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", status=" + status + ", patientNumber="
				+ patientNumber + "]";
	}

	
}
