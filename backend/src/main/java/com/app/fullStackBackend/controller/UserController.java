package com.app.fullStackBackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.fullStackBackend.exception.UserNotFoundException;
import com.app.fullStackBackend.model.User;
import com.app.fullStackBackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	
	
//	Adding the user
	User newUser (@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
 	
	// get all the users
	@GetMapping("/users")
	List <User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//get one user with id
	@GetMapping ("/user/{id}")
		User getUserById (@PathVariable int id) {
		
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser (@RequestBody User newUser, @PathVariable int id) {
		
		return userRepository.findById(id)
				.map(user -> {
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					user.setContact(newUser.getContact());
					return userRepository.save(user);
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	
	@DeleteMapping("user/{id}")
	String deleteUser (@PathVariable int id) {
		
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		
		userRepository.deleteById(id);
		
		return "User Having the id "+id+ " has deleted Successfully...";
	}
	
}
