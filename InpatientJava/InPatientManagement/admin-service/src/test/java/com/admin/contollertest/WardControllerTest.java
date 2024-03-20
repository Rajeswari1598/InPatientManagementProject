package com.admin.contollertest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.admin.bean.WardBean;
import com.admin.controller.WardController;
import com.admin.service.WardService;

@ExtendWith(MockitoExtension.class)
public class WardControllerTest {

	@Mock
	private WardService wardService;

	@InjectMocks
	private WardController wardController;

	private WardBean wardBean;

	@BeforeEach
	public void setUp() {
		wardBean = new WardBean();
		wardBean.setId(1L);
		wardBean.setName("Ward 1");
	}

	@Test
    public void testSave() {
        when(wardService.saveWard(any(WardBean.class))).thenReturn(wardBean);

        ResponseEntity<WardBean> response = wardController.saveWard(wardBean);


        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(wardBean, response.getBody());
    }

	@Test
    public void testGet() {
    when(wardService.getByWardId(1L)).thenReturn(wardBean);


        ResponseEntity<WardBean> response = wardController.getWardById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(wardBean, response.getBody());
    }

	@Test
	public void testGetAll() {
		List<WardBean> wardBeans = new ArrayList<>();
		wardBeans.add(wardBean);

		when(wardService.getAllWards()).thenReturn(wardBeans);

		ResponseEntity<List<WardBean>> response = wardController.getAllWards();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(wardBeans, response.getBody());
	}

}
