package com.exam.testCapstone;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "movies" , path = "movies")
public interface moviesRepo extends JpaRepository<movies, Integer>{
	/*
	 * @Query("select distinct movieLang from movies") List<movies> getMovieLangs();
	 */
}
