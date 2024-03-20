package com.admin.exception;

public class RoomCapacityExceededException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public RoomCapacityExceededException(String message) {
		super(message);

	}

}
