package chat.ua.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import chat.ua.database.entity.ChatList;

public interface ChatListRepository extends JpaRepository<ChatList, Long> {


}
