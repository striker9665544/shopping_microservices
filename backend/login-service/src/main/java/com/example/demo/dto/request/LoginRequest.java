package com.example.demo.dto.request;

//package com.example.loginservice;
import lombok.Data;


@Data
public class LoginRequest {
    private String username;
    private String password;
    
    // No-argument constructor
    public LoginRequest() {   }

    // All-argument constructor
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and setters

    public String getUsername() {   return username;    }

    public void setUsername(String username) {    this.username = username;   }

    public String getPassword() {    return password;    }

    public void setPassword(String password) {    this.password = password;    }
}
