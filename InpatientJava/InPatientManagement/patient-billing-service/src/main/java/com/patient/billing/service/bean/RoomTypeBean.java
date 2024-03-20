package com.patient.billing.service.bean;
public class RoomTypeBean {

	long id;
    String name;
	
    public RoomTypeBean(long id, String name) {
		super();
		this.id = id;
		this.name = name;
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

	@Override
	public String toString() {
		return "RoomTypeBean [id=" + id + ", name=" + name + "]";
	}   
	
}
