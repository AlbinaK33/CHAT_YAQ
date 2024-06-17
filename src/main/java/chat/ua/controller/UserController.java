package chat.ua.controller;

import chat.ua.database.dto.UserDTO;
import chat.ua.database.dto.UserMapper;
import chat.ua.database.entity.User;
import chat.ua.database.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        user.setPassword("defaultPassword"); // Установлюємо дефолтний пароль
        User newUser = userService.registerUser(user);
        UserDTO newUserDTO = userMapper.toDTO(newUser);
        return ResponseEntity.ok(newUserDTO);
    }


    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        return userService.findById(id)
                .map(user -> ResponseEntity.ok(userMapper.toDTO(user)))
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/all")
    public List<UserDTO> getAllUsers() {
        return userService.findAll().stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        return userService.findById(id)
                .map(user -> {
                    userMapper.updateEntityFromDTO(userDTO, user);
                    user.setId(id);
                    User savedUser = userService.save(user);
                    return ResponseEntity.ok(userMapper.toDTO(savedUser));
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}