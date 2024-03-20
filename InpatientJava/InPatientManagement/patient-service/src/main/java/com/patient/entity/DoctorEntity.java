package com.patient.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctor")
public class DoctorEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "doctor_id")
	private long id;
	@Column(name = "doctor_name")
	private String name;
	@Column(name = "department_id")
	private long departmentId;
	@Column(name = "status")
	private String status;

	public DoctorEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DoctorEntity(long id, String name, long departmentId, String status) {
		super();
		this.id = id;
		this.name = name;
		this.departmentId = departmentId;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(long departmentId) {
		this.departmentId = departmentId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "DoctorEntity [id=" + id + ", name=" + name + ", departmentId=" + departmentId + ", status=" + status
				+ "]";
	}

}
