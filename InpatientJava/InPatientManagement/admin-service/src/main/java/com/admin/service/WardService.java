package com.admin.service;

import java.util.List;

import com.admin.bean.WardBean;
import com.admin.entity.Ward;

public interface WardService {

	WardBean getByWardId(Long id);

	void delete(Long id);

	List<Ward> findByDepartmentId(Long departmentId);

	WardBean saveWard(WardBean wardBean);

	void updateStatus(Ward ward);

	List<WardBean> getAllWards();

	void updateWard(WardBean wardBean);

}
