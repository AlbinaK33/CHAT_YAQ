package chat.ua.database.entity;

import java.io.Serializable;

import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "participants")
public class Participants implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "chat_list_id", nullable = false)
    private ChatList chatList;
}
