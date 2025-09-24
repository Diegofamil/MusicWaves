package com.musicwaves.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import jakarta.persistence.*;

@Entity
@Table(name ="SPT_Tokens")

public class SpotifyTokens {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String accessToken;
    private String privateToken;
    private LocalDateTime expirateAt;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getAccessToken() {
        return accessToken;
    }
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
    public String getPrivateToken() {
        return privateToken;
    }
    public void setPrivateToken(String privateToken) {
        this.privateToken = privateToken;
    }
    public LocalDateTime getExpirateAt() {
        return expirateAt;
    }
    public void setExpirateAt(LocalDateTime expirateAt) {
        this.expirateAt = expirateAt;
    }

}
