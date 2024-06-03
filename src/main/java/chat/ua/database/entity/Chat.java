package chat.ua.database.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "chat")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "chat_name", unique = true)
    private String chatName;

    @ManyToOne
    @JoinColumn(name = "list_chat_id", nullable = false)
    private ChatList listChat;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;

    @Column(name = "is_edited", nullable = false)
    private Boolean isEdited;

    @Column(name = "edited_at")
    private LocalDateTime editedAt;

    @Column(name = "attachments")
    private String attachments;

    @Column(name = "pinned", nullable = false)
    private Boolean pinned;

    @Column(name = "is_read", nullable = false)
    private Boolean isRead;

    @Column(name = "read_at")
    private LocalDateTime readAt;

}
