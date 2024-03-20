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
@Table(name = "bed")
public class BedEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bed_id")
    private long id;
	@Column(name="bed_no")
	private int bedNo;
	@Column(name = "status")
	private String status;
	@ManyToOne
	@JoinColumn(name = "room_id", referencedColumnName = "room_id")
	private RoomEntity roomId;
	
	public BedEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public BedEntity(long id, int bedNo, String status, RoomEntity roomId) {
		super();
		this.id = id;
		this.bedNo = bedNo;
		this.status = status;
		this.roomId = roomId;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public RoomEntity getRoomId() {
		return roomId;
	}

	public void setRoomId(RoomEntity roomId) {
		this.roomId = roomId;
	}

	
	public int getBedNo() {
		return bedNo;
	}



	public void setBedNo(int bedNo) {
		this.bedNo = bedNo;
	}



	@Override
	public String toString() {
		return "BedEntity [id=" + id + ", bedNo=" + bedNo + ", status=" + status + ", roomId=" + roomId + "]";
	}




    	
	
	
}
