package chat.ua.database.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "user_contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "contact_id", nullable = false)
    private long contactId;

    @ManyToMany(mappedBy = "contacts")
    private List<User> users = new ArrayList<>();

}
