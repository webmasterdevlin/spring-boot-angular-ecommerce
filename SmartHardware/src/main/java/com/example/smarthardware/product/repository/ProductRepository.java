package com.example.smarthardware.product.repository;

import com.example.smarthardware.product.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Query(value="SELECT * FROM products p WHERE " +
            "LOWER(p.name) LIKE CONCAT('%',:query, '%')"
            , nativeQuery = true)
    Iterable<Product> searchProductByName(String query);
}