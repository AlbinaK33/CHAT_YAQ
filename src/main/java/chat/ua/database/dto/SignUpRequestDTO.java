package chat.ua.database.dto;

import lombok.Data;

@Data
public class SignUpRequestDTO {
    private String email;
    private String password;
    private String username;
    private String firstName;
    private String lastName;
    private String city;
    private String country;
    private String language;

}

