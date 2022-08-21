package com.example.smarthardware.product.service;

import com.example.smarthardware.product.entity.Product;
import com.example.smarthardware.product.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Iterable<Product> searchProducts(String query) {
        return productRepository.searchProductByName(query);
    }
}
