package com.musicwaves.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String pwd;

    //Constructores
    public Users() {
    }

    public Users(String email, String pwd) {
        this.email = email;
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
    
}
