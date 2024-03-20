package com.admin.service.implementation;

import java.sql.Timestamp;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.entity.OTPEntity;
import com.admin.exception.EmailNotFoundException;
import com.admin.repository.OtpRepository;
import com.admin.service.OTPService;

@Service
public class OTPServiceImplentation implements OTPService {
	@Autowired
	private OtpRepository otpRepository;

	@Override
	public void saveOtp(String email, String otp, Timestamp expirationTime) {
		Optional<OTPEntity> OtpEntity = otpRepository.findByEmail(email);
		if (OtpEntity.get().getEmail() != null) {
			OTPEntity otpEntity = new OTPEntity();
			otpEntity.setEmail(email);
			otpEntity.setOtp(otp);
			otpEntity.setExpirationTime(expirationTime);

			otpRepository.save(otpEntity);
		} else {
			throw new EmailNotFoundException("Email not found");
		}

	}

}
