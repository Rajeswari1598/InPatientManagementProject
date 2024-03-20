package com.patient.billing.service.bean;

public class RoomBean {
	
private long id;
	
	private int roomNo;
	
	private int roomSharing;
	
	private double roomPrice;
	
	private RoomTypeBean roomTypeId;
	
	private WardBean wardId;

	public RoomBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RoomBean(long id, int roomNo, int roomSharing, double roomPrice, RoomTypeBean roomTypeId, WardBean wardId) {
		super();
		this.id = id;
		this.roomNo = roomNo;
		this.roomSharing = roomSharing;
		this.roomPrice = roomPrice;
		this.roomTypeId = roomTypeId;
		this.wardId = wardId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}

	public int getRoomSharing() {
		return roomSharing;
	}

	public void setRoomSharing(int roomSharing) {
		this.roomSharing = roomSharing;
	}

	public double getRoomPrice() {
		return roomPrice;
	}

	public void setRoomPrice(double roomPrice) {
		this.roomPrice = roomPrice;
	}

	public RoomTypeBean getRoomTypeId() {
		return roomTypeId;
	}

	public void setRoomTypeId(RoomTypeBean roomTypeId) {
		this.roomTypeId = roomTypeId;
	}

	public WardBean getWardId() {
		return wardId;
	}

	public void setWardId(WardBean wardId) {
		this.wardId = wardId;
	}

	@Override
	public String toString() {
		return "RoomBean [id=" + id + ", roomNo=" + roomNo + ", roomSharing=" + roomSharing + ", roomPrice=" + roomPrice
				+ ", roomTypeId=" + roomTypeId + ", wardId=" + wardId + "]";
	}

	

}
