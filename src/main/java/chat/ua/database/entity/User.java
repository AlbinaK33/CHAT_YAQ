package chat.ua.database.entity;

import chat.ua.database.entity.enums.Language;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;


@Entity
@Data
@Table(name = "users")
public class User implements UserDetails {

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

    @Column(nullable = false, length = 30)
    private String country;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "registration_date", nullable = false, updatable = false)
    private LocalDateTime registrationDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "last_login_date", nullable = false, updatable = false)
    private LocalDateTime lastLoginDate;

    @Column(name = "avatar")
    private byte[] avatar;

    @Column(name = "blocked")
    private boolean isBlocked;

    @Column(name = "about_me", length = 100)
    private String aboutMe;

    @Column(name = "instagram", length = 100)
    private String instagram;

    @Column(name = "linkedin", length = 100)
    private String linkedin;

    @Column(name = "facebook", length = 100)
    private String facebook;

    @Convert(converter = Jsr310JpaConverters.ZoneIdConverter.class)
    @Column(name = "timezone", nullable = false)
    private ZoneId timezone;

    @Enumerated(EnumType.STRING)
    @Column(name = "language", nullable = false)
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
            name = "user_role_permissions",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    private List<Permission> permissions = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "participants",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "room_id"))
    private Set<Room> rooms;

    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SupportRequest> supportRequests = new ArrayList<>();


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return permissions.stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getRole().name()))
                .collect(Collectors.toList());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !isBlocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    @PrePersist
    protected void onCreate() {
        this.registrationDate = LocalDateTime.now();
        this.timezone = ZoneId.systemDefault();
    }

    @PreUpdate
    protected void onUpdate() {
        this.lastLoginDate = LocalDateTime.now();
        this.timezone = ZoneId.systemDefault();
    }


}
