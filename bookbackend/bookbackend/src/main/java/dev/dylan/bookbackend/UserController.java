package dev.dylan.bookbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> createUser(@RequestBody UserPayload userPayload) {
        
        return new ResponseEntity<User>(userService.createUser(userPayload.getPayloadUsername(), 
        userPayload.getPayloadEmailAddress(), userPayload.getPayloadPassword()),HttpStatus.CREATED);
    }
    
    @PostMapping("/signin")
    public ResponseEntity<User> checkUser(@RequestBody UserPayload userPayload) {
        User foundUser = userService.checkUser(userPayload.getPayloadEmailAddress(), userPayload.getPayloadPassword());

    if (foundUser == null) {
        return new ResponseEntity<User>(foundUser, HttpStatus.NOT_FOUND);
    }
        return new ResponseEntity<User>(foundUser, HttpStatus.OK);
    }
    
}
