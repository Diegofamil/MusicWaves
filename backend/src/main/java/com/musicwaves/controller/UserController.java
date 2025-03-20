package com.musicwaves.controller;

import com.musicwaves.model.Users;
import com.musicwaves.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Users> list() {
        return userService.listAll();
    }
    @PostMapping
    public void addUser(@RequestBody Users user) {
        // System.out.println(user.getEmail());
        // System.out.println(user.getPwd());
        userService.save(user);
    }
}
