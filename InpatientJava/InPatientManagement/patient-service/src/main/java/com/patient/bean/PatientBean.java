package com.patient.bean;

public class PatientBean {
	private int patientId;
	private String firstName;
	private String lastName;
	private String patientGender;
	private int patientAge;
	private long patientContactNo;
	private long patientAlternteContactNo;
	private String patientNumber;
	private DoctorBean doctor;

	public String getPatientNumber() {
		return patientNumber;
	}

	public void setPatientNumber(String patientNumber) {
		this.patientNumber = patientNumber;
	}

	public PatientBean(int patientId, String firstName, String lastName, String patientGender, int patientAge,
			long patientContactNo, long patientAlternteContactNo, String patientNumber, DoctorBean doctor) {
		super();
		this.patientId = patientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.patientGender = patientGender;
		this.patientAge = patientAge;
		this.patientContactNo = patientContactNo;
		this.patientAlternteContactNo = patientAlternteContactNo;
		this.patientNumber = patientNumber;
		this.doctor = doctor;
	}

	public PatientBean() {
		super();
	}

	public PatientBean(int patientId, String firstName, String lastName, String patientGender, int patientAge,
			long patientContactNo, long patientAlternteContactNo, DoctorBean doctor) {
		super();
		this.patientId = patientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.patientGender = patientGender;
		this.patientAge = patientAge;
		this.patientContactNo = patientContactNo;
		this.patientAlternteContactNo = patientAlternteContactNo;
		this.doctor = doctor;
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

	public DoctorBean getDoctor() {
		return doctor;
	}

	public void setDoctorBean(DoctorBean doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "PatientBean [patientId=" + patientId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", patientGender=" + patientGender + ", patientAge=" + patientAge + ", patientContactNo="
				+ patientContactNo + ", patientAlternteContactNo=" + patientAlternteContactNo + ", doctorBean=" + doctor
				+ "]";
	}

}
