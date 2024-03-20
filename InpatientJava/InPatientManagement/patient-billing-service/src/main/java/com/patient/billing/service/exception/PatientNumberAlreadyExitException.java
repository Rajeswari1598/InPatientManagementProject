package com.patient.billing.service.exception;

public class PatientNumberAlreadyExitException extends RuntimeException
{
	public PatientNumberAlreadyExitException()
	{
		super();
	}
	public PatientNumberAlreadyExitException(String message)
	{
		super(message);
	}

}
