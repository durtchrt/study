package reactive.service;

import java.util.*;

public class Event {
    long id;
    Date when;

    public Event() {
        this.when = new Date();
    }

    public Event(long id, Date date) {
        this.id = id;
        this.when = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getWhen() {
        return when;
    }

    public void setWhen(Date when) {
        this.when = when;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", when=" + when +
                '}';
    }
}
