package chat.ua.database.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String city;
    private String country;
    private String aboutMe;
    private String social;
    private String timezone;
}
