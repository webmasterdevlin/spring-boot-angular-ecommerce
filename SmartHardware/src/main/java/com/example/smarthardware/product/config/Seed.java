package com.example.smarthardware.product.config;

import com.example.smarthardware.product.entity.Product;
import com.example.smarthardware.product.repository.ProductRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.DecimalFormat;
import java.util.Random;

@Configuration
public class Seed {

    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository) {
        return args -> {
            Faker faker = new Faker();
            for (int i = 0; i < 12; i++) {
                productRepository.save(new Product(faker.commerce().productName(),
                        faker.lorem().sentence(20),
                        faker.number().randomDouble(0, 1, 100),
                        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA"));
            }
        };
    }
}
