package com.admin.contollertest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
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

import com.admin.bean.DepartmentBean;
import com.admin.controller.DepartmentController;
import com.admin.service.DepartmentService;

@ExtendWith(MockitoExtension.class)
public class DepartmentControllerTest {

	@Mock
	private DepartmentService departmentService;

	@InjectMocks
	private DepartmentController departmentController;

	private DepartmentBean departmentBean;

	@BeforeEach
	public void setUp() {
		departmentBean = new DepartmentBean();
		departmentBean.setId(1);
		departmentBean.setName("cardiology");
	}

	@Test
    public void testSave() {
        when(departmentService.save(departmentBean)).thenReturn(departmentBean);

        ResponseEntity<DepartmentBean> response = departmentController.saveDepartment(departmentBean);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(departmentBean, response.getBody());

        verify(departmentService, times(1)).save(eq(departmentBean));

    }

	@Test
    public void testGetById() {
        when(departmentService.getById(1L)).thenReturn(departmentBean);

        ResponseEntity<DepartmentBean> response = departmentController.getDepartmentById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(departmentBean, response.getBody());
    }

	@Test
	public void testGetAll() {
		List<DepartmentBean> departmentList = new ArrayList<>();
		departmentList.add(departmentBean);
		when(departmentService.getAll()).thenReturn(departmentList);

		ResponseEntity<List<DepartmentBean>> response = departmentController.getAllDepartments();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(departmentList, response.getBody());
	}

	@Test
	public void testDeleteById() {
		doNothing().when(departmentService).delete(1L);

		ResponseEntity<?> response = departmentController.deleteDepartmentById(1L);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(null, response.getBody());
	}

}
