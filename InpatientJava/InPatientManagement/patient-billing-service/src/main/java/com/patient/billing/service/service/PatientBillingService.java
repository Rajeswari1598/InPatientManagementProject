package com.patient.billing.service.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.patient.billing.service.dto.BedAllocationDto;
import com.patient.billing.service.dto.PatientBillingDTO;
import com.patient.billing.service.entity.PatientBillingEntity;


public interface PatientBillingService {

	void updateStatus(PatientBillingEntity patientBillingEntity);

	Optional<List<PatientBillingDTO>> filterBillingDetailsByDateRange(LocalDate startDate, LocalDate endDate);

	Optional<BedAllocationDto> getBedAllocationDetailsBasedOnPatientNumber(String patientNumber);

	Optional<List<PatientBillingDTO>> getAllBillingDetails();

	void savebillingDetails(BedAllocationDto billing);

}
