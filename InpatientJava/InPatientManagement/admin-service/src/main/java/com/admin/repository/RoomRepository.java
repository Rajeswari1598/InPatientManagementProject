package com.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.admin.entity.RoomEntity;

public interface RoomRepository extends JpaRepository<RoomEntity, Long> {
	List<RoomEntity> findByWardId_Id(Long wardId);

	// SELECT SUM(r.room_sharing) FROM Room r WHERE r.ward_id = 2;
	@Query("SELECT SUM(r.roomSharing) FROM RoomEntity r WHERE r.wardId.id = :wardId")
	Integer sumRoomSharingByWard(@Param("wardId") Long wardId);

	public RoomEntity getByRoomNoAndWardId_Id(int roomNo, long id);
}
