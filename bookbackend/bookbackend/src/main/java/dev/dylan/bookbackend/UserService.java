package dev.dylan.bookbackend;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public User createUser(String username, String emailAddress, String password){
        User user = userRepository.insert(new User(username, emailAddress, password));
        return user;
    }

    public User checkUser(String emailAddress, String password){
        // Create a Query with Criteria
        Query query = new Query();
        query.addCriteria(Criteria.where("emailAddress").is(emailAddress))
             .addCriteria(Criteria.where("password").is(password));

        // Use mongoTemplate to find the user
        return mongoTemplate.findOne(query, User.class);
    }
}
