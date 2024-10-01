package dev.dylan.bookbackend;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;

    private String username;
    private String emailAddress;
    private String password;

    public User(String username, String emailAddress, String password){
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    @DocumentReference
    private ReadingList readingList;

}
