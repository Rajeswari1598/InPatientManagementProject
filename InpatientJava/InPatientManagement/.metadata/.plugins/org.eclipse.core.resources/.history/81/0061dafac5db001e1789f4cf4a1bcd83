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
import com.admin.exception.RecordNotFoundException;
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
	public ResponseEntity<RoomBean> save(@RequestBody RoomBean roomBean) {
		try {
			roomService.save(roomBean);
			logger.info("Room saved successfully");
			return new ResponseEntity<>(roomBean, HttpStatus.CREATED);
		} catch (Exception e) {
			logger.error("Error occurred while saving room", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping(path = "/getAll")
	public ResponseEntity<List<RoomBean>> getAll() {
		try {
			List<RoomBean> list = roomService.getAll();
			logger.info("Retrieved all rooms successfully");
			return new ResponseEntity<>(list, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Error occurred while retrieving all rooms", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping(path = "/getByWardId/{id}")
	public ResponseEntity<List<RoomEntity>> getAllByWard(@PathVariable long id) {
		try {
			List<RoomEntity> list = roomService.findByWardId(id);
			logger.info("Retrieved rooms by ward ID successfully");
			return new ResponseEntity<>(list, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Error occurred while retrieving rooms by ward ID", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping(path = "/getByRoomId/{id}")
	public ResponseEntity<RoomBean> getById(@PathVariable Long id) {
		try {
			RoomBean roombyid = roomService.getById(id);
			logger.info("Retrieved room by ID successfully");
			return new ResponseEntity<>(roombyid, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Error occurred while retrieving room by ID", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping(path = "/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id) {
		try {
			roomService.delete(id);
			logger.info("Deleted room successfully");
			return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
		} catch (RecordNotFoundException e) {
			logger.error("Room deletion failed: " + e.getMessage());
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			logger.error("Error occurred while deleting room", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping(path = "/update")
	public ResponseEntity<Object> updateRoom(@RequestBody RoomBean roomBean) {
		try {
			roomService.update(roomBean.getId());
			logger.info("Room updated successfully");
			return ResponseEntity.ok().body("{\"message\": \"Room updated successfully\"}");
		} catch (RecordNotFoundException e) {
			logger.error("Room update failed: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"" + e.getMessage() + "\"}");
		} catch (Exception e) {
			logger.error("Error occurred while updating room", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("{\"error\": \"Error occurred while updating room\"}");
		}
	}

	@PutMapping("/updateStatus")
	public void put(@RequestBody RoomEntity roomEntity) {
		logger.info("Update the room status");
		roomService.updateStatus(roomEntity);
		logger.info(" Update the room status sucessfully");
	}

}
