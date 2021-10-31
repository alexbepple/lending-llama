package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@RestController
public class AllocationController {

    private RestTemplate restTemplate;

    public AllocationController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/best-rate")
    public Allocation getAllocation() {
        String url = "https://priceless-khorana-4dd263.netlify.app/btc-rates.json";
        Platform[] platforms = restTemplate.getForObject(url, Platform[].class);
        List<PlatformTier> platformTiers = stream(platforms).flatMap(p -> stream(p.getTiers()).map(t ->
            new PlatformTier()
                .setName(p.getName())
                .setRate(t.getRate())
                .setMax(t.getMax())
        ))
            .sorted(Comparator.comparingDouble(PlatformTier::getRate).reversed())
            .collect(Collectors.toList());
        PlatformTier tier1 = platformTiers.get(0);
        return new Allocation().setName(tier1.getName()).setRate(tier1.getRate());
    }
}
