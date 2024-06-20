package chat.ua.database.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import chat.ua.database.entity.Room;
import chat.ua.database.entity.User;
import chat.ua.database.repository.RoomRepository;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public Room getRoomById(Long id) {
        return roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
    }

    public List<Room> getAllRooms(){
        return roomRepository.findAll();
    }
    
    public void saveRoom(Room room) {
    	roomRepository.save(room);
    }
    
    public void deleteRoomById(Long id) {
    	roomRepository.deleteById(id);
    }
    
    public Set<User> getUsersInRoom(Long roomId){
    	Optional<Room> room = roomRepository.findById(roomId);
    	return room.map(Room::getUsers).orElse(Collections.emptySet());
    }

}
