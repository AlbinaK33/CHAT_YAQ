package chat.ua.controller;

import java.util.List;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chat.ua.database.entity.Room;
import chat.ua.database.entity.User;
import chat.ua.database.service.RoomService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {

	private final RoomService roomService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Room> getRoomById(@PathVariable Long id){
		try {
			Room room = roomService.getRoomById(id);
			return new ResponseEntity<>(room, HttpStatus.OK);
		}catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@GetMapping
	public ResponseEntity<List<Room>> getAllRooms(){
		List<Room> rooms = roomService.getAllRooms();
		return new ResponseEntity<>(rooms, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Room> createRoom(@RequestBody Room room){
		roomService.saveRoom(room);
		return new ResponseEntity<>(room,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteRoomById(@PathVariable Long id){
		try {
			roomService.deleteRoomById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@GetMapping("/{id}/users")
	public ResponseEntity<Set<User>> getUsersInRoom(@PathVariable Long id){
		Set<User> users = roomService.getUsersInRoom(id);
		if (users.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<>(users, HttpStatus.OK);
		}
	}
}
