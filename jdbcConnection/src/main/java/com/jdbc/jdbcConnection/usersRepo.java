package com.jdbc.jdbcConnection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users" , path = "users")
public interface usersRepo extends JpaRepository<users, Integer> {

}
