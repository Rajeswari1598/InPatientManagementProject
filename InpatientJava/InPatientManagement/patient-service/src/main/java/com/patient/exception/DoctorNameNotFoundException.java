package com.patient.exception;

public class DoctorNameNotFoundException extends RuntimeException
{
	public DoctorNameNotFoundException()
	{
		super();
	}
	public DoctorNameNotFoundException(String message)
	{
		super(message);
	}

}
