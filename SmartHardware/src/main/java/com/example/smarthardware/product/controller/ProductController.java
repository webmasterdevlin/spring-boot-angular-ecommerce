package com.example.smarthardware.product.controller;

import com.example.smarthardware.product.entity.Product;
import com.example.smarthardware.product.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/search")
    public Iterable<Product> searchProducts(@RequestParam("query") String query) {
        return productService.searchProducts(query.toLowerCase());
    }
}