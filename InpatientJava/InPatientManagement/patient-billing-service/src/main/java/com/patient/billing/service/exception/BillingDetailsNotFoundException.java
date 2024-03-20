package com.patient.billing.service.exception;

public class BillingDetailsNotFoundException extends RuntimeException {
	public BillingDetailsNotFoundException() {
		super();
	}

	public BillingDetailsNotFoundException(String message) {
		super(message);

	}
}
