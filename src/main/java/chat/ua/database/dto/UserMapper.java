package chat.ua.database.dto;

import chat.ua.database.entity.User;
import org.springframework.stereotype.Component;

import java.time.ZoneId;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setUsername(user.getUsername());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setPhone(user.getPhone());
        dto.setCity(user.getCity());
        dto.setCountry(user.getCountry());
        dto.setAboutMe(user.getAboutMe());
        dto.setInstagram(user.getInstagram());
        dto.setLinkedin(user.getLinkedin());
        dto.setFacebook(user.getFacebook());
        dto.setAvatar(user.getAvatar());
        dto.setTimezone(user.getTimezone() != null ? String.valueOf((ZoneId.of(user.getTimezone().toString()))) : null);
        return dto;
    }

    public User toEntity(UserDTO dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setCity(dto.getCity());
        user.setCountry(dto.getCountry());
        user.setAboutMe(dto.getAboutMe());
        user.setInstagram(dto.getInstagram());
        user.setLinkedin(dto.getLinkedin());
        user.setFacebook(dto.getFacebook());
        user.setAvatar(user.getAvatar());
        if (dto.getTimezone() != null) {
            user.setTimezone(ZoneId.of(dto.getTimezone()));
        }
        return user;
    }

    public void updateEntityFromDTO(UserDTO dto, User user) {
        user.setUsername(dto.getUsername());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setCity(dto.getCity());
        user.setCountry(dto.getCountry());
        user.setAboutMe(dto.getAboutMe());
        user.setInstagram(dto.getInstagram());
        user.setLinkedin(dto.getLinkedin());
        user.setFacebook(dto.getFacebook());
        user.setAvatar(dto.getAvatar());
        if (dto.getTimezone() != null) {
            user.setTimezone(ZoneId.of(dto.getTimezone()));
        }
    }
}
