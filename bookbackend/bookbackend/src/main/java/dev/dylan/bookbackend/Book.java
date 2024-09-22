package dev.dylan.bookbackend;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId id;

    private String author;
    private String country;
    private String imageLink;
    private String language;
    private String wikiLink;
    private int pages;
    private String title;
    private int year;

    @DocumentReference
    private List<Review> reviews;
}
