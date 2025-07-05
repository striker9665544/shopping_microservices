package com.cart.demo.repository;

//src/main/java/com/cart/demo/repository/CartRepository.java

import com.cart.demo.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
 Optional<Cart> findByUserId(String userId);
}
