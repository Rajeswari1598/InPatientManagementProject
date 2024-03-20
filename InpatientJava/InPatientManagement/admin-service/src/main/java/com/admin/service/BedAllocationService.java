package com.admin.service;

import java.util.List;
import java.util.Map;

import com.admin.bean.BedAllocationBean;
import com.admin.bean.PatientBean;
import com.admin.dto.BedAllocationDto;
import com.admin.entity.BedAllocation;

public interface BedAllocationService {

	BedAllocationBean save(BedAllocationBean bedAllocationBean);

	BedAllocationBean getById(int id);

	List<BedAllocationBean> getAll();

	void delete(int id);

	void update(BedAllocationBean bedAllocationBean);

	PatientBean getDetails(int id);

	List<BedAllocationDto> getBedDetails();

	BedAllocation getDetailsForUpdating(String patientNo);

	List<Map<String, Object>> getAllBedAllocationsWithPatientNames();
}
