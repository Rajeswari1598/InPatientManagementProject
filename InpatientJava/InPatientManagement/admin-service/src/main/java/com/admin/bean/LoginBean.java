package com.admin.bean;

public class LoginBean {
	private String email;
	private String password;

	public LoginBean(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LoginBean() {
		super();
	}

	@Override
	public String toString() {
		return "LoginBean [email=" + email + ", password=" + password + "]";
	}
}
