package com.search.demo.dto;

//src/main/java/com/search/demo/dto/ProductDTO.java

import java.math.BigDecimal;
import lombok.Data;

@Data
public class ProductDTO {
	
	private Long id;
	private String name;
	private BigDecimal price;
	private String brand;
	private String category; // e.g., "Mobile", "Laptop", "Shoes"
	
    // No-arg constructor
    public ProductDTO() {
    }

    // All-args constructor
    public ProductDTO(Long id, String name, BigDecimal price, String brand, String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.category = category;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
