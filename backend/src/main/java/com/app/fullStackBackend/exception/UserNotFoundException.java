package com.app.fullStackBackend.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(int id) {
		super("could not find the User with id "+id);
	}
	
	
}
