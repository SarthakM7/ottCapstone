package com.jdbc.jdbcConnection;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class megaController {

	@Autowired
	usersRepo repo; //for users DB
	
	@Autowired
	moviesRepo repo2; //for movies DB
	
	@RequestMapping("/")
	public void Home() {
		System.out.println("Site started"); //Checking root server started perfectly this will be printed in console.
	}
	
	@RequestMapping("/users")
	@ResponseBody
	public List getUsers() {
		return repo.findAll(); //to get all users from DB
	}
	
	@RequestMapping("users/{id}")
	@ResponseBody
	public Optional<users> getUsers(@PathVariable("id") int id) {
		//System.out.println(repo);
		return repo.findById(id); //specific user details from DB
	}
	
	@RequestMapping("/movies")
	@ResponseBody
	public List getMovies() {
		
		return repo2.findAll(); //Movies DB full display
	}
	
	@RequestMapping("movies/{id}")
	@ResponseBody
	public Optional<movies> getMovies(@PathVariable("id") int id) {
		//System.out.println(repo);
		return repo2.findById(id);//specific movie details from DB
	}

	
	@PostMapping("users")
	@ResponseBody
	public users addUser(@RequestBody users user) {
		repo.save(user);
		return user;
	}
	
	@PutMapping(path="/users", consumes= {"applications/json"})
	public users updateuser( @RequestBody users user)
	{
		repo.save(user);
		return user;
	}


}
