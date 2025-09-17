package com.musicwaves.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String username;
    private String pwd;

    //Constructores
    public Users() {
    }

    public Users(String email, String username, String pwd) {
        this.email = email;
        this.username = username;
        this.pwd = pwd;
    }

    //Getters y Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPwd() {
        return pwd;
    }   
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    public String getUsername() {
        return username;
    }   
    public void setUsername(String username) {
        this.username = username;
    }
    
}
