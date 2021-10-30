package com.example;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Quote {
    private String type;
    private Quote.Value value;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Value {
        private Long id;
        private String quote;
    }
}
