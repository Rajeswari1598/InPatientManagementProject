package com.patient.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.patient.entity.DoctorEntity;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorEntity, Long>{
	
    @Query(value = "SELECT d.doctor_name, d.status, dp.department_name " +
            "FROM doctor d " +
            "JOIN department dp ON d.department_id = dp.dept_id",
    nativeQuery = true)
    List<Object[]> getAllWithDept();


}
