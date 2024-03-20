package com.admin.entity;

import jakarta.persistence.CascadeType;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ward_id")
	private long id;
	@Column(name = "ward_name")
	private String name;
	@Column(name = "capacity")
	private int capacity;
	@Column(name = "availability")
	private int availability;

	@ManyToOne(cascade = { CascadeType.MERGE })
	@JoinColumn(name = "departmentId", referencedColumnName = "dept_id")
	private Department departmentId;
	@Column(name = "status")
	private String status;

	public Ward(long id, String name, int capacity, int availability, Department departmentId, String status) {
		super();
		this.id = id;
		this.name = name;
		this.capacity = capacity;
		this.availability = availability;
		this.departmentId = departmentId;
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
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

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public void setAvailability(int availability) {
		this.availability = availability;
	}

	public int getAvailability() {
		return availability;
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
				+ ", departmentId=" + departmentId + ", status=" + status + "]";
	}

}
