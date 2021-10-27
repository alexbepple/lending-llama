package com.example.springboot;

import com.example.restservice.quote.Quote;
import com.example.restservice.quote.QuoteController;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.ExpectedCount;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withStatus;

@SpringBootTest
public class QuoteControllerTest {

    @Autowired
    private QuoteController quoteController;
    @Autowired
    private RestTemplate restTemplate;

    private MockRestServiceServer mockServer;
    private ObjectMapper mapper = new ObjectMapper();

    @BeforeEach
    public void beforeEach() {
        mockServer = MockRestServiceServer.createServer(restTemplate);
    }

    @Test
    public void returnsTheQuoteValue() throws Exception {
        Quote quote = new Quote();
        Quote.Value value = new Quote.Value();
        value.setQuote("xyz");
        quote.setValue(value);

        mockServer
            .expect(
                ExpectedCount.once(),
                requestTo(new URI("https://quoters.apps.pcfone.io/api/random"))
            )
            .andExpect(method(HttpMethod.GET))
            .andRespond(withStatus(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(mapper.writeValueAsString(quote))
            );

        assertThat(quoteController.getRandomQuote()).isEqualTo(value);
    }
}
