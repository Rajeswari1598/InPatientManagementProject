package com.patient.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.patient.bean.PatientBean;
import com.patient.entity.PatientEntity;
import com.patient.exception.DoctorNameNotFoundException;
import com.patient.exception.PatientDetailsNotFoundException;
import com.patient.exception.PatientIdNotFoundException;
import com.patient.repository.PatientRepository;
import com.patient.service.PatientService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
public class PatientServiceImplementation implements PatientService {
	@Autowired
	private PatientRepository patientRepository;
	ObjectMapper objectMapper = new ObjectMapper();
	@PersistenceContext
	private EntityManager entityManager;
	private int currentYear;
	private int currentMonth;
	private int currentNumber;
	private static Logger log = LoggerFactory.getLogger(PatientServiceImplementation.class.getSimpleName());

	@Override
	public PatientBean savePatientDetails(PatientBean patientBean) {

		log.info("Saving the patient details");
		try {
			PatientEntity patientEntity = objectMapper.convertValue(patientBean, PatientEntity.class);

			String patientNumber = generatePatientNo();
			patientEntity.setPatientNumber(patientNumber);
			patientRepository.save(patientEntity);
			log.info("Patient details saved successfully");
			return patientBean;
		} catch (Exception e) {
			log.error("Error occurred while saving patient details: " + e.getMessage());
			throw e;
		}

	}

	@Override
	public List<PatientBean> getAllPatientDetails() {
		log.info("Getting all patient details");
		List<PatientBean> patientBeanList = new ArrayList<>();
		List<PatientEntity> patientEntityList = patientRepository.findAll();
		if (patientEntityList != null) {
			entityToBean(patientEntityList, patientBeanList);
			log.info("Retrieved all patient details successfully");
			return patientBeanList;

		} else {
			log.info("patient details not found");
			throw new PatientDetailsNotFoundException("patient details not found");
		}
	}

	@Override
	public Optional<PatientEntity> getPatientById(Integer id) {

		log.info("Getting patient details by ID");
		Optional<PatientEntity> patientEntityOptional = patientRepository.findById(id);
		if (!patientEntityOptional.isPresent()) {
			log.error("Patient with ID " + id + " not found");
			throw new PatientIdNotFoundException("Patient with ID " + id + " not found");
		} else {
			log.info("Retrieved patient details by ID successfully");
			return patientEntityOptional;
		}

	}

	public void BeanToEntity(PatientEntity patientEntity, PatientBean patientBean) {
		patientEntity = objectMapper.convertValue(patientBean, PatientEntity.class);
	}

	public void entityToBean(List<PatientEntity> patientEntityList, List<PatientBean> patientBeanList) {

		for (PatientEntity patientEntity : patientEntityList) {
			PatientBean patientBean = new PatientBean();
			patientBean = objectMapper.convertValue(patientEntity, PatientBean.class);
			patientBeanList.add(patientBean);

		}
	}

	public void entityToBean(PatientEntity patientEntity, PatientBean patientBean) {

		patientBean = objectMapper.convertValue(patientEntity, PatientBean.class);

	}

	public List<Object[]> getPatientDetailsByDoctor(String doctorName) {
		if (doctorName != null) {
			log.info("Getting doctor name");
			return patientRepository.findPatientDetailsByDoctorName(doctorName);
		} else {
			log.info("doctor name not found");
			throw new DoctorNameNotFoundException("doctor name not found");
		}
	}

	public List<Object[]> getPatientDetailsByFullName(String fullName) {
		log.info("get the patient name");
		return patientRepository.getPatientDetailsByFullName(fullName);
	}

	@Override
	public void updateStatus(PatientEntity patient) {
		log.info("Update the patient status");
		patient.setStatus("InActive");
		patientRepository.save(patient);

	}

	@Override
	public String generatePatientNo() {
		log.info("patient number is generating");
		int year = java.time.Year.now().getValue();
		int month = java.time.MonthDay.now().getMonthValue();

		if (year != currentYear || month != currentMonth) {
			currentYear = year;
			currentMonth = month;
			currentNumber = 1;
		} else {

			currentNumber++;
		}

		String patientNumber = String.format("IN-%02d-%02d-%04d", currentYear % 100, currentMonth, currentNumber);

		log.info("patient number is generated sucessfully");
		return patientNumber;

	}

}
