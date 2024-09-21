package dev.dylan.bookbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@RestController
public class BookbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookbackendApplication.class, args);
	}

	@GetMapping("/")
	public String getHomePage() {
		return "Hello World";
	}
	

}
