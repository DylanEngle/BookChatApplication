package dev.dylan.bookbackend;

import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {
    @Autowired
    private ReviewService  reviewService;

    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody ReviewPayload reviewPayload) {
        //TODO: process POST request
        
        return new ResponseEntity<Review>(reviewService.createReview(reviewPayload.getPayloadBody(), 
        reviewPayload.getPayloadId()),HttpStatus.CREATED);
    }
    
}
