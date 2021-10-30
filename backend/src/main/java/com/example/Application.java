package com.example;

import io.split.client.SplitClient;
import io.split.client.SplitClientConfig;
import io.split.client.SplitFactory;
import io.split.client.SplitFactoryBuilder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@SpringBootApplication(scanBasePackages = "com.example")
public class Application {

	public static void main(String[] args) throws Exception {
		System.setProperty("spring.devtools.livereload.enabled", "false");
		System.setProperty("logging.level.web", "DEBUG");
		SpringApplication.run(Application.class, args);

        loadFeatureFlags();
	}

    static void loadFeatureFlags() throws Exception {
        SplitClientConfig config = SplitClientConfig.builder()
            .setBlockUntilReadyTimeout(10000)
            .build();
        SplitFactory splitFactory = SplitFactoryBuilder.build("reqt8c55ttivqsitjju67ikte2iamsmggagf", config);
        SplitClient client = splitFactory.client();
        String treatment = client.getTreatment("key","my-first-split");
        System.out.printf("Flag value on app load: %s%n", treatment);

        client.blockUntilReady();
        String treatment2 = client.getTreatment("key","my-first-split");
        System.out.printf("Flag value after Split SDK ready: %s%n", treatment2);
}

//	@Bean // toggle comment to toggle debug info
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			System.out.println("Beans provided by Spring Boot:");
			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}
		};
	}

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

}
