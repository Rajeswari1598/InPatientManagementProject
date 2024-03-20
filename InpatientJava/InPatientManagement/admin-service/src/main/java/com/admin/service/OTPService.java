package com.admin.service;

import java.sql.Timestamp;

public interface OTPService {
	void saveOtp(String email, String otp, Timestamp expirationTime);

}
