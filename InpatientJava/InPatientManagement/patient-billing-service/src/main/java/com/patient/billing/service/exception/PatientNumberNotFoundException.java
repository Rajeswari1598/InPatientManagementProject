package com.patient.billing.service.exception;

public class PatientNumberNotFoundException  extends RuntimeException
{
	
	public PatientNumberNotFoundException()
	{
		super();
	}
	public PatientNumberNotFoundException(String message)
	{
		super(message);
	}

}
