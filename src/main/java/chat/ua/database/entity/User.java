package chat.ua.database.entity;


import chat.ua.database.entity.enums.Language;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false, length = 15)
    private String username;

    @Column(nullable = false, length = 200, columnDefinition = "VARCHAR(200) CHECK (password ~ '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')")
    private String password;

    @Column(nullable = false, length = 20)
    private String firstName;

    @Column(nullable = false, length = 20)
    private String lastName;

    @Column(unique = true, nullable = false, length = 100, columnDefinition = "VARCHAR(100) CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')")
    private String email;

    @Column(unique = true, length = 15)
    private String phone;

    @Column(nullable = false, length = 30)
    private String city;

    @Column(nullable = false, length = 50)
    private String state;

    @Column(nullable = false, length = 30)
    private String country;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "registration_date", nullable = false)
    private LocalDateTime registrationDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "last_login_date", nullable = false)
    private LocalDateTime lastLoginDate;

    @Column
    private byte avatar;

    @Column
    private boolean isBlocked;

    @Column(name = "about_me", length = 100)
    private String aboutMe;

    @Column(name = "social_networks", length = 100)
    private String social;

    @Column(nullable = false)
    private ZoneId timezone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Language language;

    @ManyToMany
    @JoinTable(
            name = "user_contacts",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "contact_id")
    )
    private List<Contact> contacts = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "role_permissions",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    private List<Permission> permissions = new ArrayList<>();
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Participants> participants = new HashSet<>();



    @PrePersist
    protected void onCreate() {
        this.registrationDate = LocalDateTime.now();
    }







}
