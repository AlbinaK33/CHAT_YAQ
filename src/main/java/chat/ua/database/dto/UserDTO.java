package chat.ua.database.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;


@Data
public class UserDTO {
    @NotBlank(message = "Username is mandatory")
    @Pattern(regexp = "^\\w+$", message = "Invalid username")
    private String username;

    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Invalid email address")
    private String email;

    @Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{10}$", message = "Invalid phone number")
    private String phone;
    private String city;
    private String country;
    private String aboutMe;
    private String instagram;
    private String linkedin;
    private String facebook;
    private byte[] avatar;
    private String timezone;


    private String password;
}
