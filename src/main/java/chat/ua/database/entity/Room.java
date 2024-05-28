package chat.ua.database.entity;

import java.util.HashSet;
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

    @Column(name = "room_name", nullable = false)
    private String roomName;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<Participants> participants = new HashSet<>();
   
}
