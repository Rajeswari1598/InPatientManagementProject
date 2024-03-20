package com.patient.billing.service.exception;

public class BedAllocationNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BedAllocationNotFoundException() {
		super();

	}

	public BedAllocationNotFoundException(String message) {
		super(message);

	}

}
