package com.shoes.demo.dto;

import java.math.BigDecimal;

public class ProductResponseDTO {

    private Long id;
    private String name;
    private BigDecimal price;
    private String brand;

    // No-arg constructor
    public ProductResponseDTO() {
    }

    // All-arg constructor
    public ProductResponseDTO(Long id, String name, BigDecimal price, String brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}

