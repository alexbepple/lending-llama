package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AllocationController {

    private RestTemplate restTemplate;

    public AllocationController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/allocation")
    public Allocation getAllocation() {
        String url = "https://priceless-khorana-4dd263.netlify.app/btc-rates.json";
        Platform platform = restTemplate.getForObject(url, Platform[].class)[0];
        Platform.Tier tier = platform.getTiers()[0];
        return new Allocation().setName(platform.getName()).setRate(tier.getRate());
    }
}
