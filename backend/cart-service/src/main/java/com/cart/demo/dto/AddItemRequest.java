package com.cart.demo.dto;

//src/main/java/com/cart/demo/dto/AddItemRequest.java

import lombok.Data;

@Data
public class AddItemRequest {
	
	 private Long productId;
	 private String productName;
	 private double price;
	 private int quantity;
	 
	    // No-arg constructor
	    public AddItemRequest() {
	    }

	    // All-arg constructor
	    public AddItemRequest(Long productId, String productName, double price, int quantity) {
	        this.productId = productId;
	        this.productName = productName;
	        this.price = price;
	        this.quantity = quantity;
	    }

	    // Getters and Setters
	    public Long getProductId() {
	        return productId;
	    }

	    public void setProductId(Long productId) {
	        this.productId = productId;
	    }

	    public String getProductName() {
	        return productName;
	    }

	    public void setProductName(String productName) {
	        this.productName = productName;
	    }

	    public double getPrice() {
	        return price;
	    }

	    public void setPrice(double price) {
	        this.price = price;
	    }

	    public int getQuantity() {
	        return quantity;
	    }

	    public void setQuantity(int quantity) {
	        this.quantity = quantity;
	    }
}
