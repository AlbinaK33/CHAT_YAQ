package chat.ua.database.entity;

import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "room_name", nullable = false, length = 500)
    private String roomName;

    @Column(name = "description", nullable = false, length = 500)
    private String description;

    @ManyToMany(mappedBy = "rooms")
    private Set<User> users;
   
}
