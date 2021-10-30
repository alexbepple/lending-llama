package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AllocationController {

    @GetMapping("/allocation")
    public Allocation getAllocation() {
        return new Allocation().setName("Ledn").setRate(6.25);
    }
}
