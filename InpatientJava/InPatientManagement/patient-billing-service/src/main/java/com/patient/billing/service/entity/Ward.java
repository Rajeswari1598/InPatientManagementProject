package com.patient.billing.service.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ward")

public class Ward {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ward_id")
	private long id;
	@Column(name = "ward_name")
	private String name;
	@Column(name = "capacity")
	private int capacity;
	@Column(name = "availability")
	private int availability;
	@ManyToOne
	@JoinColumn(name = "department_id",referencedColumnName = "dept_id")
	private Department departmentId;

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

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getAvailability() {
		return availability;
	}

	public void setAvailability(int availability) {
		this.availability = availability;
	}

	
	

	public Department getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Department departmentId) {
		this.departmentId = departmentId;
	}

	public Ward() {
		super();
	}

	@Override
	public String toString() {
		return "Ward [id=" + id + ", name=" + name + ", capacity=" + capacity + ", availability=" + availability
				+ ", departmentId=" + departmentId + "]";
	}

	
	

}

	