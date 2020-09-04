package com.erp.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FOUND)
public class UserAlreadyExistException extends RuntimeException{

	private static final long seralVersionUID = 1L;
	
	public UserAlreadyExistException(String message) {
		super(message);
	}
	
}