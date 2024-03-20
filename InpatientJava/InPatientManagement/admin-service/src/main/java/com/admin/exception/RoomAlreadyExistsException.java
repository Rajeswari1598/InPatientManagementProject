package com.admin.exception;

public class RoomAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public RoomAlreadyExistsException(String message) {
		super(message);
		
	}

}
