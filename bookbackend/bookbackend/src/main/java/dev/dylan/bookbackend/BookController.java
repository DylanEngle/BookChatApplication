package dev.dylan.bookbackend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    @Autowired
    private BookService bookService;



    @GetMapping()
    public ResponseEntity<List<Book>> getAllBooks() {
        
        return new ResponseEntity<List<Book>>(bookService.allBooks(), HttpStatus.OK);
        
    }
    
}
