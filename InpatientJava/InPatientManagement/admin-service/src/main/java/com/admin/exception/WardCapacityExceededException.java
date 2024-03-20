package com.admin.exception;

public class WardCapacityExceededException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public WardCapacityExceededException(String message) {
		super(message);

	}

}
