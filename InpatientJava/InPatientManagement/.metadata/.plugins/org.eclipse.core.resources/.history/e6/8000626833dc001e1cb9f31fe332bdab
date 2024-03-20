package com.admin.contollertest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.admin.bean.RegistrationBean;
import com.admin.controller.RegistrationController;
import com.admin.service.RegistrationService;

@ExtendWith(MockitoExtension.class)
public class RegistrationControllerTest {

	@Mock
	private RegistrationService registrationService;

	@InjectMocks
	private RegistrationController registrationController;

	private RegistrationBean registrationBean;

	@BeforeEach
	public void setUp() {
		registrationBean = new RegistrationBean();
		registrationBean.setId(1);
		// Initialize other properties if needed
	}

	@Test
    public void testSave() {
        when(registrationService.saveRegistration(registrationBean)).thenReturn(registrationBean);

        ResponseEntity<RegistrationBean> response = registrationController.save(registrationBean);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(registrationBean, response.getBody());
    }

}
