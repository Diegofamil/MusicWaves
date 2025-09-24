package com.musicwaves.controller;

import java.util.Base64;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/spotify")
public class SpotifyAuthController {

    @Value("${spotify.client.id}")
    private String clientId;

    @Value("${spotify.client.secret}")
    private String clientSecret;

    @Value("${spotify.redirect.uri}")
    private String redirectUri;

    @Value("${spotify.token.url}")
    private String tokenUrl;

    @SuppressWarnings("unchecked")
    @PostMapping("/second")
    public ResponseEntity<?> handleSpotifyCallback(@RequestParam("code") String code) throws Exception {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        String auth = clientId + ":" + clientSecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
        header.add("Authorization", "Basic" + encodedAuth);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("code", code);
        body.add("redirect_uri", redirectUri);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, header);

        ResponseEntity<Map<String, Object>> response = restTemplate.postForEntity(tokenUrl, request,
                (Class<Map<String, Object>>) (Class<?>) Map.class);

        Map<String, Object> tokens = response.getBody();

        return ResponseEntity.ok(tokens);
    }
    @SuppressWarnings("unchecked")
    @PostMapping("/resfresh")
    public ResponseEntity<?> resfreshToken(@RequestParam("refresh_token") String refreshToken){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        String auth = clientId + ":"+ clientSecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
        headers.add("Authorization","Basic" + encodedAuth);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "refresh_token");
        body.add("refresh_token", refreshToken);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

        ResponseEntity<Map<String, Object>> response = restTemplate.postForEntity(tokenUrl, request,
                (Class<Map<String, Object>>) (Class<?>) Map.class);

        return ResponseEntity.ok(response.getBody());
    }
}
