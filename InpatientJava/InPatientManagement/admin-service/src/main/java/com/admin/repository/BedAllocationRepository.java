package com.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.admin.dto.BedAllocationDto;
import com.admin.entity.BedAllocation;

@EnableJpaRepositories
@Repository
public interface BedAllocationRepository extends JpaRepository<BedAllocation, Integer> {

	@Query("select new com.admin.dto.BedAllocationDto(b.id,b.noOfDays,b.startDate,b.endDate,p.firstName,p.lastName,b.bedId)"
			+ " from BedAllocation b join PatientEntity p on b.patientId=p.patientId")
	List<BedAllocationDto> getBedAllocationDetails();

	@Query("SELECT ba FROM BedAllocation ba WHERE ba.endDate < CURRENT_DATE")
	List<BedAllocation> findBedAllocationsWithEndDateBeforeCurrentDate();

	public BedAllocation getByPatientId(int id);
	
	@Query("select new BedAllocation(b.id,b.patientId,b.bedId,b.noOfDays,b.startDate,b.endDate,b.status)"
			+ "from BedAllocation b join PatientEntity p on b.patientId=p.patientId where p.patientNumber=:patientNo")
	public BedAllocation getDetailsForUpdating(String patientNo);

	BedAllocation getByPatientNumber(String patientNumber);
}
