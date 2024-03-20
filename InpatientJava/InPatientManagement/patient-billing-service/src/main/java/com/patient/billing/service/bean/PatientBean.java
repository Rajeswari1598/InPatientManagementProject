package com.patient.billing.service.bean;

public class PatientBean {
	
		private int patientId;
		private String firstName;
		private String lastName;
		private char patientGender;
		private int patientAge;
		private long patientContactNo;
		private long patientAlternteContactNo;
		
		
		public PatientBean() {
			super();
		}


		public PatientBean(int patientId, String firstName, String lastName, char patientGender, int patientAge,
				long patientContactNo, long patientAlternteContactNo) {
			super();
			this.patientId = patientId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.patientGender = patientGender;
			this.patientAge = patientAge;
			this.patientContactNo = patientContactNo;
			this.patientAlternteContactNo = patientAlternteContactNo;
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


		public char getPatientGender() {
			return patientGender;
		}


		public void setPatientGender(char patientGender) {
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


		@Override
		public String toString() {
			return "PatientBean [patientId=" + patientId + ", firstName=" + firstName + ", lastName=" + lastName
					+ ", patientGender=" + patientGender + ", patientAge=" + patientAge + ", patientContactNo="
					+ patientContactNo + ", patientAlternteContactNo=" + patientAlternteContactNo + "]";
		}

		
		
	}

	


