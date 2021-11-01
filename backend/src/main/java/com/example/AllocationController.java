package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static java.util.Arrays.stream;

@RestController
public class AllocationController {

    private RestTemplate restTemplate;

    public AllocationController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/best-rate")
    public Allocation getBestRate() {
        PlatformTier tier1 = getPlatformTiersDescByRate().get(0);
        return new Allocation().setName(tier1.getName()).setRate(tier1.getRate());
    }

    @GetMapping("/allocations")
    public Stream<Allocation> getAllocation(@RequestParam Double amount) {
        List<PlatformTier> platformTiers = getPlatformTiersDescByRate();

        int count = (int) IntStream.range(1, platformTiers.size())
            .takeWhile(i -> platformTiers.stream().limit(i).mapToDouble(PlatformTier::getMax).sum() < amount)
            .count();

        return platformTiers.subList(0, count+1).stream().map(
            t -> new Allocation().setName(t.getName()).setRate(t.getRate())
        );
    }

    private List<PlatformTier> getPlatformTiersDescByRate() {
        String url = "https://priceless-khorana-4dd263.netlify.app/btc-rates.json";
        Platform[] platforms = restTemplate.getForObject(url, Platform[].class);
        return stream(platforms).flatMap(p -> stream(p.getTiers()).map(t ->
                new PlatformTier()
                    .setName(p.getName())
                    .setRate(t.getRate())
                    .setMax(t.getMax())
            ))
            .sorted(Comparator.comparingDouble(PlatformTier::getRate).reversed())
            .collect(Collectors.toList());
    }
}
