package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;
import java.util.List;
import java.util.Optional;

public interface UserService extends UserDetailsService {
    User findByUsername(String name);
    public Optional<User> getUser(long id);
    public List<User> getAllUsers();
    public void saveUser(User user);
    public void deleteUser(long id);
    public void updateUser(User user);
}
