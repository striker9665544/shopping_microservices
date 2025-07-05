package com.cart.demo.entity;

//src/main/java/com/cart/demo/entity/Cart.java

import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Cart {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 // This uniquely identifies the user's cart. Could be a username or a UUID.
 @Column(unique = true, nullable = false)
 private String userId;

 @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
 private List<CartItem> items = new ArrayList<>();
}
