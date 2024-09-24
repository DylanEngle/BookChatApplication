package dev.dylan.bookbackend;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, ObjectId id){
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Book.class)
                    .matching(Criteria.where("_id").is(id))
                    .apply(new Update().push("reviews", review))
                    .first();
        return review;

    }
}
