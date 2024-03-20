package com.patient.exception;

public class DepartmentNotFoundException extends RuntimeException
{
	public DepartmentNotFoundException()
	{
		super();
	}
	public DepartmentNotFoundException(String message)
	{
		super(message);
	}

}
