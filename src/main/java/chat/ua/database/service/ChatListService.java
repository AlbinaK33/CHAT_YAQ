package chat.ua.database.service;

import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import chat.ua.database.entity.Chat;
import chat.ua.database.entity.ChatList;
import chat.ua.database.repository.ChatListRepository;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatListService {
	private final ChatListRepository chatListRepository;
	
	public Optional<ChatList> getChatListById(long id){
		return chatListRepository.findById(id);
	}
	
	public Set<Chat> getChatsByChatList(ChatList chatList){
		return chatList.getChats();
	}

}
