package com.jdbc.jdbcConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class JdbcConnectionApplication implements CommandLineRunner{

	@Autowired
	private JdbcTemplate jdbcTemplate;	
	
	public static void main(String[] args) 
	{
		SpringApplication.run(JdbcConnectionApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		String sql= "Insert into Users(id, fname, lname, password, mobile, email, accType) Values (?,?,?,?,?,?,?)";
		int result= jdbcTemplate.update(sql, 3, "Aviraj", "Ranawat","1234567890", "7010818891", "aviraj@F.com", true);
		
		
		if(result>0) {
			System.out.println("New rows came");
		}else {
			System.out.println("Error");
		}
		
		
				
		
	}

}
