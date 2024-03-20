package com.admin.service;

import java.util.List;

import com.admin.bean.DepartmentBean;
import com.admin.entity.Department;

public interface DepartmentService {
	DepartmentBean save(DepartmentBean department);

	DepartmentBean getById(long id);

	List<DepartmentBean> getAll();

	void delete(long id);

	void updateStatus(Department department);
}
