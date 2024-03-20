package com.patient.billing.service.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="roomType")
public class RoomType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="room_type_id") 
	long id;
    @Column(name="room_type_name") 
    String name;
	
    public RoomType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RoomType(long id, String name) {
		super();
		this.id = id;
		this.name = name;
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
		return "RoomType [id=" + id + ", name=" + name + "]";
	}
    
    
}
