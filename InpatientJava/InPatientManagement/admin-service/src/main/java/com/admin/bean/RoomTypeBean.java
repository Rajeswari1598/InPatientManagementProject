package com.admin.bean;

public class RoomTypeBean {

	long id;
	String name;
	private String status;

	public RoomTypeBean(long id, String name, String status) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
	}

	public RoomTypeBean() {
		super();
		// TODO Auto-generated constructor stub
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "RoomTypeBean [id=" + id + ", name=" + name + ", status=" + status + "]";
	}

}
