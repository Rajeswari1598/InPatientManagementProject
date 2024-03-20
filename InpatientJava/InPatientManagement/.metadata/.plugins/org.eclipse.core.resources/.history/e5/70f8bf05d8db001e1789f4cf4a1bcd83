package com.patient.service;

import java.util.List;
import java.util.Optional;

import com.patient.bean.PatientBean;
import com.patient.entity.PatientEntity;

public interface PatientService {

	PatientBean save(PatientBean patientBean);

	List<PatientBean> getAll();

	Optional<PatientEntity> getPatientById(Integer id);

	List<Object[]> getPatientDetailsByDoctor(String doctorName);

	List<Object[]> getPatientDetailsByFullName(String fullName);

	void updateStatus(PatientEntity patient);

	String generatePatientNo();

}
