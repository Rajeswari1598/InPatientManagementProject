package com.admin.exception;

public class WardAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public WardAlreadyExistsException(String message) {
		super(message);
	}

}
