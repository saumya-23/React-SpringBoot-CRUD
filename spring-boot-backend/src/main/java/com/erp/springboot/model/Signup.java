package com.erp.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_signup")
public class Signup {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userid;

	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "password")
	private String password;
	
	public Signup() {}
	
	
	public Signup(long userid, String emailId, String password) {
		super();
		this.userid = userid;
		this.emailId = emailId;
		this.password = password;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "Signup [userid=" + userid + ", emailId=" + emailId + ", password=" + password + "]";
	}


	public boolean isEmpty() {
		// TODO Auto-generated method stub
		return false;
	}
	
}