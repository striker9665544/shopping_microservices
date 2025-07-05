package com.mobile.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Entity
@Data
public class Mobile {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private BigDecimal price;
    
    private String brand;
    
    // No-argument constructor
    public Mobile() {
    }

    public Mobile(Long id, String name, BigDecimal price, String brand) { // <-- Add 'brand' here
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand; // <-- And assign it here
    }

    // Getters and setters

    public Long getId() {    return id;   }

    public void setId(Long id) {   this.id = id;    }

    public String getName() {  return name;  }

    public void setName(String name) { this.name = name; }

    public BigDecimal getPrice() { return price; }

    public void setPrice(BigDecimal price) { this.price = price; }
    
    public String getBrand() { return brand; }
    
    public void setBrand(String brand) { this.brand = brand; }
    
}
