package com.admin.exception;

public class RoomTypeAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public RoomTypeAlreadyExistsException(String message) {
		super(message);
	}

}
