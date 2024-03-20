package com.admin.bean;

public class DepartmentBean {

	private long id;
	private String name;
	private String status;

	public DepartmentBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DepartmentBean(long id, String name, String status) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
	}

	public DepartmentBean(String name) {
		this.name = name;
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

	@Override
	public String toString() {
		return "DepartmentBean [id=" + id + ", name=" + name + ", status=" + status + "]";
	}

}
