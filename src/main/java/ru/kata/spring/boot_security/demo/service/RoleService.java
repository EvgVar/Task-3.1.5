package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.model.Role;
import java.util.List;

public interface RoleService {
    public void saveRole(Role role);
    public Role getRole(long id);
    public List<Role> getAllRoles();
}
