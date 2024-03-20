package com.patient.exception;

public class PatientIdNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PatientIdNotFoundException() {
		super();
	}

	public PatientIdNotFoundException(String message) {
		super(message);
	}

}
