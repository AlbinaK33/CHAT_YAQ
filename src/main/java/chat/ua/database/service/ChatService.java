package chat.ua.database.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import chat.ua.database.entity.Chat;
import chat.ua.database.repository.ChatRepository;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatService {

	private final ChatRepository chatRepository;
	
	 public void saveChat(Chat chat) {
	        chatRepository.save(chat);
	    }

	    public List<Chat> getAllChats() {
	        return chatRepository.findAll();
	    }

	    public Optional<Chat> getChatById(Long id) {
	        return chatRepository.findById(id);
	    }

	    public void deleteChatById(Long id) {
	        chatRepository.deleteById(id);
	    }
}
