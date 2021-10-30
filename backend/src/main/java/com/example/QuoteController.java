package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class QuoteController {

    private RestTemplate restTemplate;

    public QuoteController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/quotes/random")
    public Quote.Value getRandomQuote() {
        String url = "https://quoters.apps.pcfone.io/api/random";
        return restTemplate.getForObject(url, Quote.class).getValue();
    }
}
