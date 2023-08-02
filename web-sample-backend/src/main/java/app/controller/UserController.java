package app.controller;

import app.dto.UserDto;
import app.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import app.service.impl.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("create")
    public User createUser(@RequestBody UserDto userDto) {
        return userService.createUser(userDto);
    }

    @GetMapping("user")
    public User getUser() {
        return userService.getUser();
    }

}