package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService extends UserDetailsService {
    User findByUsername(String name);
    public User getUser(long id);
    public List<User> getAllUsers();
    public void saveUser(User user);
    public void deleteUser(long id);
    public void updateUser(User user, long id);
}
