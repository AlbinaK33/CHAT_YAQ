package chat.ua.database.service;

import chat.ua.database.dto.SupportRequestDTO;
import chat.ua.database.entity.SupportRequest;
import chat.ua.database.entity.User;
import chat.ua.database.repository.SupportRequestRepository;
import chat.ua.database.exception.UserNotFoundException;
import chat.ua.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;


@Service
public class SupportRequestService {

    private final SupportRequestRepository supportRequestRepository;
    private final UserRepository userRepository;

    @Autowired
    public SupportRequestService(SupportRequestRepository supportRequestRepository, UserRepository userRepository) {
        this.supportRequestRepository = supportRequestRepository;
        this.userRepository = userRepository;
    }

    public SupportRequestDTO createSupportRequest(SupportRequestDTO supportRequestDTO, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email " + email));
        SupportRequest supportRequest = new SupportRequest(user, supportRequestDTO.getMessageSupport(), LocalDateTime.now());
        supportRequest = supportRequestRepository.save(supportRequest);
        return toDTO(supportRequest);
    }

    private SupportRequestDTO toDTO(SupportRequest supportRequest) {
        SupportRequestDTO dto = new SupportRequestDTO();
        dto.setId(supportRequest.getId());
        dto.setUserId(supportRequest.getUser().getId());
        dto.setMessageSupport(supportRequest.getMessageSupport());
        return dto;
    }

}