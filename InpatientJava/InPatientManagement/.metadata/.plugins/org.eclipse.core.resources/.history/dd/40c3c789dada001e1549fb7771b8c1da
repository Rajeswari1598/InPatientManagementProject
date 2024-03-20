package com.admin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patientregistration")
public class PatientEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="patient_id")
	private int patientId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="gender")
	private String patientGender;
	@Column(name="patient_age")
	private int patientAge;
	@Column(name="patient_contact_no")
	private long patientContactNo;
	@Column(name="patient_alternte_contact_no")
	private long patientAlternteContactNo;
	@Column(name="patient_number")
	private String patientNumber;
	
	public PatientEntity() {
		
	}

	public PatientEntity(int patientId, String firstName, String lastName, String patientGender, int patientAge,
			long patientContactNo, long patientAlternteContactNo, String patientNumber) {
		super();
		this.patientId = patientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.patientGender = patientGender;
		this.patientAge = patientAge;
		this.patientContactNo = patientContactNo;
		this.patientAlternteContactNo = patientAlternteContactNo;
		this.patientNumber = patientNumber;
	}



	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getPatientGender() {
		return patientGender;
	}

	public void setPatientGender(String patientGender) {
		this.patientGender = patientGender;
	}

	public int getPatientAge() {
		return patientAge;
	}
	public void setPatientAge(int patientAge) {
		this.patientAge = patientAge;
	}
	public long getPatientContactNo() {
		return patientContactNo;
	}
	public void setPatientContactNo(long patientContactNo) {
		this.patientContactNo = patientContactNo;
	}
	public long getPatientAlternteContactNo() {
		return patientAlternteContactNo;
	}
	public void setPatientAlternteContactNo(long patientAlternteContactNo) {
		this.patientAlternteContactNo = patientAlternteContactNo;
	}
	

	public String getPatientNumber() {
		return patientNumber;
	}

	public void setPatientNumber(String patientNumber) {
		this.patientNumber = patientNumber;
	}

	@Override
	public String toString() {
		return "PatientEntity [patientId=" + patientId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", patientGender=" + patientGender + ", patientAge=" + patientAge + ", patientContactNo="
				+ patientContactNo + ", patientAlternteContactNo=" + patientAlternteContactNo + ", patientNumber="
				+ patientNumber + "]";
	}

	
	
}
