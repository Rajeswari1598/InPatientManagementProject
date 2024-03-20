package com.admin.exception;

public class PatientDoesNotExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PatientDoesNotExistsException(String message) {
		super(message);
	}

}
