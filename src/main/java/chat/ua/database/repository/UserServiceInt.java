package chat.ua.database.repository;

import chat.ua.database.dto.SignUpRequestDTO;

public interface UserServiceInt {
    boolean existsByEmail(String email);
    void save(SignUpRequestDTO signUpRequest);
}
