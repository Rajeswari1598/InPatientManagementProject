package com.patient.service;

import java.util.List;

import com.patient.bean.DoctorBean;
import com.patient.entity.DoctorEntity;

public interface DoctorService {

	DoctorBean saveDoctorDetails(DoctorBean doctorBean);

	DoctorBean getDoctorById(long id);

	List<DoctorBean> getAllDoctorDetails();

	List<Object[]> getAllWithDept();

	void delete(Long id);

	void updateDoctorDetails(DoctorBean doctorbean);

	void updateStatus(DoctorEntity doctor);
}
