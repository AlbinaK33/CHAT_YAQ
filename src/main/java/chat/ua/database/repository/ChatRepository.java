package chat.ua.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chat.ua.database.entity.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long>{

}
