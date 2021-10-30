package com.example.springboot;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AllocationControllerUseCaseTest {
    @Autowired
    private TestRestTemplate template;

    @Test
    public void returnsAllocationWithBestRate() throws Exception {
        ResponseEntity<String> res = template.getForEntity("/allocation", String.class);
        Assertions.assertThat(res.getBody()).isEqualTo("foo");
    }
}
