package com.patient.billing.service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PatientBillingExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<String> exception(BillingIdNotFoundException billingId) {
		//log.error("ResourceNotFoundException-" + exception.getMessage(), exception);
		return new ResponseEntity<>(billingId.getMessage(), HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<String> billingDetailsNotFoundException(BillingDetailsNotFoundException billingDetails) {
		//log.error("ResourceNotFoundException-" + exception.getMessage(), exception);
		return new ResponseEntity<>(billingDetails.getMessage(), HttpStatus.NOT_FOUND);
	}
}
