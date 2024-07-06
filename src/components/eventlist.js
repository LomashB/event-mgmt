// src/components/EventList.js

import React from "react";
import { Link } from "react-router-dom"; // Ensure to import Link
import events from "./eventdata"; // Correct the import path
import "./../assets/css/eventlist.css";
const EventList = () => {
  return (
    <div className="event-list">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h2>{event.title}</h2>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>{event.description}</p>
          <Link to={`/event/${event.id}`}>View Details</Link>
          <img src={event.image}></img>
        </div>
      ))}
    </div>
  );
};

export default EventList;
