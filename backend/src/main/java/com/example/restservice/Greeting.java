package com.example.restservice;

import java.util.Objects;

public class Greeting {
    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, content);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (!(obj instanceof Greeting)) {
            return false;
        } else {
            Greeting other = (Greeting) obj;
            return Objects.equals(id, other.id)
                && Objects.equals(content, other.content);
        }
    }

    @Override
    public String toString() {
        return "Greeting [id=" + id + ", content=" + content + "]";
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
