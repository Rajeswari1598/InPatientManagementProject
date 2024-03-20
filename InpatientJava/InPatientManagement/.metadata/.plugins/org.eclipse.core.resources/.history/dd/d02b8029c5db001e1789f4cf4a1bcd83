package com.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.admin.entity.RegistrationForm;

@Repository
@EnableJpaRepositories
public interface RegistrationRepository extends JpaRepository<RegistrationForm, Integer> {
	RegistrationForm findByEmail(String email);

	// RegistrationForm findByEmail(OtpBean otp);
	// Optional<OtpBean> findByEmail1(String email);
	// Optional<OtpBean> findEmail(String email);
	boolean existsByEmail(String email);

}