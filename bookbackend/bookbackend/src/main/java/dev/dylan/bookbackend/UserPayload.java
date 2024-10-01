package dev.dylan.bookbackend;

import org.bson.types.ObjectId;

public class UserPayload {
    private String payloadUsername;
    private String payloadEmailAddress;
    private String payloadPassword;
    private ObjectId payloadId;

    public String getPayloadEmailAddress() {
        return this.payloadEmailAddress;
    }

    public void setPayloadEmailAddress(String payloadEmailAddress) {
        this.payloadEmailAddress = payloadEmailAddress;
    }

    public String getPayloadPassword() {
        return this.payloadPassword;
    }

    public void setPayloadPassword(String payloadPassword) {
        this.payloadPassword = payloadPassword;
    }
    // Getters and Setters
    public String getPayloadUsername() {
        return payloadUsername;
    }

    public void setPayloadUsername(String payloadBody) {
        this.payloadUsername = payloadBody;
    }

    public ObjectId getPayloadId() {
        return payloadId;
    }

    public void setPayloadId(ObjectId payloadId) {
        this.payloadId = payloadId;
    }
}
