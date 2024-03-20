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

import com.admin.bean.BedBean;
import com.admin.controller.BedEntityController;
import com.admin.service.BedService;

@ExtendWith(MockitoExtension.class)
public class BedEntityControllerTest {

	@Mock
	private BedService bedService;

	@InjectMocks
	private BedEntityController bedEntityController;

	private BedBean bedBean;

	@BeforeEach
	public void setUp() {
		bedBean = new BedBean();
		bedBean.setId(1L);
		// Initialize other properties if needed
	}

	@Test
    public void testSave() {
        when(bedService.save(any(BedBean.class))).thenReturn(bedBean);

        ResponseEntity<BedBean> response = bedEntityController.save(bedBean);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(bedBean, response.getBody());
    }

	@Test
    public void testGetById() {
        when(bedService.getById(1L)).thenReturn(bedBean);

        ResponseEntity<BedBean> response = bedEntityController.getById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(bedBean, response.getBody());
    }

	@Test
	public void testGetAll() {
		List<BedBean> bedList = new ArrayList<>();
		bedList.add(bedBean);
		when(bedService.getAll()).thenReturn(bedList);

		ResponseEntity<List<BedBean>> response = bedEntityController.getAll();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(bedList, response.getBody());
	}

}
