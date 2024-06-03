package chat.ua.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chat.ua.database.entity.Room;

public interface RoomRepository extends JpaRepository<Room,Long>{

}
