package com.jdbc.jdbcConnection;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class users {
	@Id
	private int id;
	private String fname;
	private String lname;
	private String mobile;
	private String email;
	private boolean acctype;
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean getAccType() {
		return acctype;
	}
	public void setAccType(boolean accType) {
		this.acctype = accType;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		System.out.println();
		return "Users [id=" + id + ", fname=" + fname + ", lname=" + lname + ", mobile=" + mobile + ", email=" + email
				+ ", accType=" + acctype + ", password=" + password + "]" ;
	}
}
