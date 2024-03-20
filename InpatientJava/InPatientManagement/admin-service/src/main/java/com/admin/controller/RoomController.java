package com.admin.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.bean.RoomBean;
import com.admin.entity.RoomEntity;
import com.admin.repository.RoomRepository;
import com.admin.service.RoomService;

@RestController
@RequestMapping("/room")
public class RoomController {

	private static final Logger logger = LoggerFactory.getLogger(RoomController.class);

	@Autowired
	RoomService roomService;

	@Autowired
	RoomRepository roomRepository;

	@PostMapping(path = "/save")
	public ResponseEntity<RoomBean> savingRoom(@RequestBody RoomBean roomBean) {
		logger.info("Saving room");
		roomService.savingRoom(roomBean);
		logger.info("Room saved successfully");
		return new ResponseEntity<>(roomBean, HttpStatus.CREATED);

	}

	@GetMapping(path = "/getAll")
	public ResponseEntity<List<RoomBean>> getAllRooms() {
		logger.info("Retrieving all rooms ");
		List<RoomBean> list = roomService.getAll();
		logger.info("Retrieved all rooms successfully");
		return new ResponseEntity<>(list, HttpStatus.OK);

	}

	@GetMapping(path = "/getByWardId/{id}")
	public ResponseEntity<List<RoomEntity>> getAllByWard(@PathVariable long id) {
		logger.info("Retrieving room by ward ID ");
		List<RoomEntity> list = roomService.findByWardId(id);
		logger.info("Retrieved rooms by ward ID successfully");
		return new ResponseEntity<>(list, HttpStatus.OK);

	}

	@GetMapping(path = "/getByRoomId/{id}")
	public ResponseEntity<RoomBean> getRoomById(@PathVariable Long id) {
		logger.info("Retrieving room by ID");
		RoomBean roombyid = roomService.getById(id);
		logger.info("Retrieved room by ID successfully");
		return new ResponseEntity<>(roombyid, HttpStatus.OK);

	}

	@DeleteMapping(path = "/delete/{id}")
	public ResponseEntity<String> deleteRoomById(@PathVariable Long id) {

		roomService.delete(id);
		logger.info("Deleted room successfully");
		return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);

	}

	@PutMapping(path = "/update")
	public ResponseEntity<Object> updateRoom(@RequestBody RoomBean roomBean) {

		roomService.update(roomBean.getId());
		logger.info("Room updated successfully");
		return ResponseEntity.ok().body("{\"message\": \"Room updated successfully\"}");

	}

	@PutMapping("/updateStatus")
	public void updateStatus(@RequestBody RoomEntity roomEntity) {
		logger.info("Update the room status");
		roomService.updateStatus(roomEntity);
		logger.info(" Update the room status sucessfully");
	}

}
