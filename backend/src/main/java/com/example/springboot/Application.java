package com.example.springboot;

import io.split.client.SplitClient;
import io.split.client.SplitClientConfig;
import io.split.client.SplitFactory;
import io.split.client.SplitFactoryBuilder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

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
        System.out.println(String.format("Flag value on app load: %s", treatment));

        client.blockUntilReady();
        String treatment2 = client.getTreatment("key","my-first-split");
        System.out.println(String.format("Flag value after Split SDK ready: %s", treatment2));
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

}
