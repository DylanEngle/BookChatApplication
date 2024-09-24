package dev.dylan.bookbackend;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> allBooks()
    {
        return bookRepository.findAll();
    }

    public Optional<Book> singleBook(ObjectId id)
    {
        try {
            return bookRepository.findById(id);
        } catch (Exception e) {
            // TODO: handle exception
        }
        return null;
    }
}
