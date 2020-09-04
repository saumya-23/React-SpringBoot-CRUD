package com.erp.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erp.springboot.exception.UserAlreadyExistException;
import com.erp.springboot.model.Signup;
import com.erp.springboot.repository.SignupRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SignupController {

	@Autowired
	private SignupRepository userRepo;

	@GetMapping("/signup")
	public List<Signup> getAllUsers(){
		return userRepo.findAll();
	}
	
	// create employee rest api
	@PostMapping("/signup")
	public Signup signUpEmployee(@RequestBody Signup signup) {
		String email = signup.getEmailId();
		Signup user = userRepo.findByemailId(email);
		if(! user.isEmpty()) {
			throw new UserAlreadyExistException("User Already Exist");
		}
		
		return userRepo.save(signup);
	}
}
