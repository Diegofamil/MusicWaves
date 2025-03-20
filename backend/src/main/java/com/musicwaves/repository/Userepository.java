package com.musicwaves.repository;

import com.musicwaves.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Userepository extends JpaRepository<Users, Long> {
    
}
