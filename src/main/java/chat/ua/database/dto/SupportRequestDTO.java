package chat.ua.database.dto;


import lombok.Data;

@Data
public class SupportRequestDTO {

    private Long id;
    private Long userId;
    private String messageSupport;

}
