package dev.dylan.bookbackend;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="readinglists")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReadingList {
    @Id
    private ObjectId id;
    
    private List<Book> booklist;
}
