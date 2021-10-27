package com.example.restservice.quote;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class QuoteController {

    private RestTemplate restTemplate;

    public QuoteController(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @GetMapping("/quotes/random")
    public Value getRandomQuote() {
        String url = "https://quoters.apps.pcfone.io/api/random";
        return restTemplate.getForObject(url, Quote.class).getValue();
    }
}
