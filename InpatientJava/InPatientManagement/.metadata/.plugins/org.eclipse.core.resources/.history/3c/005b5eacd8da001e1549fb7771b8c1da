package com.admin.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.admin.bean.LoginBean;
import com.admin.bean.RegistrationBean;
import com.admin.entity.RegistrationForm;
import com.admin.exception.EmailAlreadyExistsException;
import com.admin.exception.EmailNotFoundException;
import com.admin.exception.RecordNotFoundException;
import com.admin.service.RegistrationService;

@RestController
@RequestMapping("register")
@CrossOrigin(origins = "**")
public class RegistrationController {

	@Autowired
	RegistrationService registrationService;
	private static Logger log = LoggerFactory.getLogger(RegistrationController.class.getSimpleName());

	@PostMapping("/save")
	public ResponseEntity<RegistrationBean> save(@RequestBody RegistrationBean registrationBean) {
		log.info("Saving Registration entity");
		try {
			registrationService.save(registrationBean);
			ResponseEntity<RegistrationBean> responseEntity = new ResponseEntity<>(registrationBean,
					HttpStatus.CREATED);
			log.info("Saving Registration entity is done");
			return responseEntity;
		} catch (EmailAlreadyExistsException e) {
			log.error("email is alred exist");
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<RegistrationBean> getById(@PathVariable int id) {
		log.info("Fetching Department by Id");

		RegistrationBean registrationBean = registrationService.getById(id);
		log.info("Fetching Department by Id is done");
		return ResponseEntity.status(HttpStatus.OK).body(registrationBean);

	}

	@GetMapping("/getAll")
	public ResponseEntity<List<RegistrationBean>> getAll() {
		log.info("Fetching All Department details");

		List<RegistrationBean> list = registrationService.getAll();
		ResponseEntity<List<RegistrationBean>> responseEntity = new ResponseEntity<>(list, HttpStatus.OK);
		log.info("Fetching All Department details is done");
		return responseEntity;

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable int id) {
		log.info("Deleting Department by ID");
		try {
			registrationService.delete(id);
			ResponseEntity<String> responseEntity = new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
			log.info("Deleting Registration by ID is done");
			return responseEntity;
		} catch (RecordNotFoundException e) {
			log.error("error handled");
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping()
	public ResponseEntity<String> update(@RequestBody RegistrationBean registrationBean) {

		log.info("Updating Department");
		registrationService.update(registrationBean);
		ResponseEntity<String> responseEntity = new ResponseEntity<>("Department updated Successfully", HttpStatus.OK);
		log.info("Updating Department is done");
		return responseEntity;
	}

	@PostMapping("/login")
	public ResponseEntity<RegistrationForm> login(@RequestBody LoginBean loginBean) {
		log.info("checking email is present or not");
		RegistrationForm user = registrationService.validateLogin(loginBean);

		if (user != null) {

			log.info("login sucessfull");
			return new ResponseEntity<RegistrationForm>(user, HttpStatus.OK);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}

	@GetMapping("/generateOtp")
	public ResponseEntity<RegistrationForm> generateOtpAndSendEmail(@RequestParam("email") String email) {

		try {
			log.info("Generate otp by using email");
			RegistrationForm user = registrationService.forgetPassword(email);
			if (user != null) {
				log.info("Generate otp by using email is done");
				return new ResponseEntity<RegistrationForm>(user, HttpStatus.OK);
			} else {

				return new ResponseEntity<RegistrationForm>(HttpStatus.UNAUTHORIZED);
			}

		} catch (EmailNotFoundException e) {

			log.error("email id is not valid");
			return new ResponseEntity<RegistrationForm>(HttpStatus.NOT_FOUND);

		}
	}

	@PostMapping("/verify")
	public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String enteredOtp) {
		try {
			log.info("verify the otp by using email");
			if (registrationService.verifyOtp(email, enteredOtp)) {
				String jsonString = "{\"message\":\"Verified Successfully\"}";
				log.info("verify the  otp by using email is done");

				return ResponseEntity.status(HttpStatus.OK).header("Content-Type", "application/json").body(jsonString);
			} else {
				log.info("Sending  the invalid otp");
				String jsonString = "{\"message\":\"Invalid OTP\"}";
				System.out.println("jsonString" + jsonString);

				return ResponseEntity.status(HttpStatus.BAD_REQUEST).header("Content-Type", "application/json")
						.body(jsonString);
			}
		} catch (EmailNotFoundException e) {

			String jsonString = "{\"message\":\"wrong otp\"}";
			log.error("error handled");

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).header("Content-Type", "application/json")
					.body(jsonString);

		}
	}

	@PutMapping("/password")
	public ResponseEntity<String> updatePassword(@RequestParam String email, @RequestParam String password) {
		log.info("Update the password");

		registrationService.updatePassword(email, password);
		log.info("Update the  password");
		return new ResponseEntity<String>("updated successfully", HttpStatus.OK);
	}

}
