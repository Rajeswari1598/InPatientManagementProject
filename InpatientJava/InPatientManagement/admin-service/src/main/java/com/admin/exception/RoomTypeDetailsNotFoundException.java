package com.admin.exception;

public class RoomTypeDetailsNotFoundException extends RuntimeException
{
	private static final long serialVersionUID = 1L;

	public RoomTypeDetailsNotFoundException(String message)
	{
		super(message);
	}

}
