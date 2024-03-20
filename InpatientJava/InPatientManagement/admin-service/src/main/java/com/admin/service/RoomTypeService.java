package com.admin.service;

import java.util.List;

import com.admin.bean.RoomTypeBean;
import com.admin.entity.RoomType;

public interface RoomTypeService {
	RoomTypeBean save(RoomTypeBean roomTypeBean);

	List<RoomTypeBean> getAll();

	RoomTypeBean getById(long id);

	public void delete(long id);

	void updateStatus(RoomType roomEntity);

	RoomType updateRoomType(RoomTypeBean roomTypeBean);
}
