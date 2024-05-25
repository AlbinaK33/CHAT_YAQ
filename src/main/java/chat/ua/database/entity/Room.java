package chat.ua.database.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "room_name", nullable = false)
    private String roomName;

    @Column(name = "description")
    private String description;

   
}
