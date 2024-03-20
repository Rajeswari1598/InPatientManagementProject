package com.patient.exception;

public class PatientDetailsNotFoundException extends RuntimeException {
	public PatientDetailsNotFoundException() {
		super();
	}

	public PatientDetailsNotFoundException(String message) {
		super(message);
	}
}
