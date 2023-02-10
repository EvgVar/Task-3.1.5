package ru.kata.spring.boot_security.demo.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;
import javax.annotation.PostConstruct;
import java.util.Set;

//@Component
public class UsersInit {
//    private final UserService userService;
//    private final RoleService roleService;
//
//    @Autowired
//    public UsersInit(UserService userService, RoleService roleService) {
//        this.userService = userService;
//        this.roleService = roleService;
//    }
//
//    @PostConstruct
//    private void postConstruct() {
//        Role roleAdmin = new Role("ROLE_ADMIN");
//        Role roleUser = new Role("ROLE_USER");
//        roleService.saveRole(roleAdmin);
//        roleService.saveRole(roleUser);
//        User admin = new User("admin", "admin", "male", 38, Set.of(roleAdmin));
//        User user = new User("user", "user", "male", 28, Set.of(roleUser));
//        userService.saveUser(admin);
//        userService.saveUser(user);
//    }
}
