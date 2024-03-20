package com.patient.billing.service.entity;

import java.time.LocalDateTime;

public class OTPEntity {
	private int id;
	private String email;
	private String otp;
    private LocalDateTime expirationTime;
	public OTPEntity(int id, String email, String otp, LocalDateTime expirationTime) {
		super();
		this.id = id;
		this.email = email;
		this.otp = otp;
		this.expirationTime = expirationTime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOtp() {
		return otp;
	}
	public OTPEntity() {
		super();
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	public LocalDateTime getExpirationTime() {
		return expirationTime;
	}
	public void setExpirationTime(LocalDateTime expirationTime) {
		this.expirationTime = expirationTime;
	}
    

}
