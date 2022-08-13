package com.jdbc.jdbcConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
	public String getUsers() {
		return repo.findAll().toString(); //to get all users from DB
	}
	
	@RequestMapping("users/{id}")
	@ResponseBody
	public String getUsers(@PathVariable("id") int id) {
		//System.out.println(repo);
		return repo.findById(id).toString(); //specific user details from DB
	}
	
	@RequestMapping("/movies")
	@ResponseBody
	public String getMovies() {
		return repo2.findAll().toString(); //Movies DB full display
	}
	
	@RequestMapping("movies/{id}")
	@ResponseBody
	public String getMovies(@PathVariable("id") int id) {
		//System.out.println(repo);
		return repo2.findById(id).toString();//specific movie details from DB
	}

}

