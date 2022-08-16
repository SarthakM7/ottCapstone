package com.jdbc.jdbcConnection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "movies" , path = "movies")
public interface moviesRepo extends JpaRepository<movies, Integer>{		//movies here =table movies
}
