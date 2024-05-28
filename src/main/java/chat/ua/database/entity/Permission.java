package chat.ua.database.entity;



import chat.ua.database.entity.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "role_permissions")
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(name = "role_name", nullable = false)
    private Role role;

    @Column(name = "can_create_chat", nullable = false)
    private boolean canCreateChat;

    @Column(name = "can_delete_chat", nullable = false)
    private boolean canDeleteChat;

    @Column(name = "can_edit_message", nullable = false)
    private boolean canEditMessage;

    @Column(name = "can_delete_user", nullable = false)
    private boolean canDeleteUser;

    @Column(name = "can_use_chat", nullable = false)
    private boolean canUseChat;

    @ManyToMany(mappedBy = "permissions")
    private List<User> users = new ArrayList<>();




}
