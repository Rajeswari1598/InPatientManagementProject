package com.admin.bean;

public class BedBean {

	private long id;
	private int bedNo;
	private String status;
	private RoomBean roomId;

	public BedBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BedBean(long id, int bedNo, String status, RoomBean roomId) {
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

	public RoomBean getRoomId() {
		return roomId;
	}

	public void setRoomId(RoomBean roomId) {
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
		return "BedBean [id=" + id + ", bedNo=" + bedNo + ", status=" + status + ", roomId=" + roomId + "]";
	}

}
