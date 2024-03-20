package com.admin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.admin.entity.BedEntity;

@Repository
public interface BedEntityRepository extends JpaRepository<BedEntity, Long> {

	List<BedEntity> findByRoomId_Id(Long roomId);

	@Query("SELECT COUNT(bedNo) FROM BedEntity b WHERE b.roomId.id = :roomId")
	Integer sumBedsByRoom(@Param("roomId") Long roomId);

	public BedEntity getByBedNoAndRoomId_Id(int bedNo, long roomId);
}
