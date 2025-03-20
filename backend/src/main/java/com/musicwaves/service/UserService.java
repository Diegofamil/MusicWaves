package com.musicwaves.service;

import com.musicwaves.model.Users;
import com.musicwaves.repository.Userepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private Userepository userepository;

    public List<Users> listAll() {
        return userepository.findAll();
    }
    public void save(Users user) {
        userepository.save(user);
    }

}
