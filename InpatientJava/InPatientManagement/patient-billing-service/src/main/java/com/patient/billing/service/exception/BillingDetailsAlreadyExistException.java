package com.patient.billing.service.exception;

public class BillingDetailsAlreadyExistException extends RuntimeException {
	public BillingDetailsAlreadyExistException() {
		super();
	}

	public BillingDetailsAlreadyExistException(String message) {
		super(message);
	}

}
