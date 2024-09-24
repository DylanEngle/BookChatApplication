package dev.dylan.bookbackend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;



    @GetMapping()
    public ResponseEntity<List<Book>> getAllBooks() {
        
        return new ResponseEntity<List<Book>>(bookService.allBooks(), HttpStatus.OK);
        
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Book>> getBook(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Book>>(bookService.singleBook(id), HttpStatus.OK);
    }
    
    
}
