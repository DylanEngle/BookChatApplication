package dev.dylan.bookbackend;

import org.bson.types.ObjectId;

public class ReviewPayload {
    private String payloadBody;
    private ObjectId payloadId;

    // Getters and Setters
    public String getPayloadBody() {
        return payloadBody;
    }

    public void setPayloadBody(String payloadBody) {
        this.payloadBody = payloadBody;
    }

    public ObjectId getPayloadId() {
        return payloadId;
    }

    public void setPayloadId(ObjectId payloadId) {
        this.payloadId = payloadId;
    }
}
