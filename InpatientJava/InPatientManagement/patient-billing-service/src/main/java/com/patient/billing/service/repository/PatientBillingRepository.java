 package com.patient.billing.service.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import com.patient.billing.service.dto.BedAllocationDto;
import com.patient.billing.service.dto.PatientBillingDTO;
import com.patient.billing.service.entity.PatientBillingEntity;

import jakarta.transaction.Transactional;
@Transactional
@EnableJpaRepositories
public interface PatientBillingRepository  extends JpaRepository<PatientBillingEntity, Integer>
{
	
	@Query("SELECT new com.patient.billing.service.dto.PatientBillingDTO (b.billId,b.billingDate,b.bedAllocationId,b.paidAmount,"
	  		+ "b.discount,b.totalAmount,b.remainingAmount,b.paymentStatus,p.firstName,p.lastName) " +
		        "FROM PatientBillingEntity b " +
		        " JOIN BedAllocation ba ON b.bedAllocationId = ba.id " +
		        " JOIN PatientEntity p ON ba.patientId = p.patientId " )
   Optional<List<PatientBillingDTO>> getBillingDetails();
  

  
  
  @Query("SELECT new com.patient.billing.service.dto.PatientBillingDTO (b.billId,b.billingDate,b.bedAllocationId,b.paidAmount,"
  		+ "b.discount,b.totalAmount,b.remainingAmount,b.paymentStatus,p.firstName,p.lastName) " +
	        "FROM PatientBillingEntity b " +
	        " JOIN BedAllocation ba ON b.bedAllocationId = ba.id " +
	        " JOIN PatientEntity p ON ba.patientId = p.patientId " +
	        " WHERE b.billingDate BETWEEN :startDate AND :endDate")
	Optional<List<PatientBillingDTO>> getBillingDetailsBetweenTheDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

   
  @Query("select new com.patient.billing.service.dto.BedAllocationDto(b.id,b.noOfDays,b.startDate,b.endDate,p.firstName,p.lastName,b.bedId)"
  		+ " from BedAllocation b join PatientEntity p on b.patientId=p.patientId")
  List<BedAllocationDto>getBedAllocationDetails();

    
  @Query("SELECT new com.patient.billing.service.dto.BedAllocationDto" +
	       "(p.firstName, p.lastName, p.patientAge, p.patientGender, p.patientContactNo, " +
	       " ba.noOfDays, ba.id, ba.startDate, ba.endDate, ba.bedId, ba.status,b.billId,b.paidAmount,b.paidAmount,b.paymentStatus) " +
	       " FROM PatientBillingEntity b " +
	       " JOIN BedAllocation ba ON b.billId = ba.id " +
	       " JOIN PatientEntity p ON ba.patientId = p.patientId " +
	       " WHERE p.patientNumber = :patientNumber")
	Optional<BedAllocationDto> findPatientDetailsByPatientNumber(@Param("patientNumber") String patientNumber);
}

