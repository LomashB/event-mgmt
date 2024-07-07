// src/components/EventDetail.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import events from "./eventdata"; // Adjust path if needed
import "../assets/css/eventdetail.css";

const EventDetail = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="event-detail" data-aos="fade-up" data-aos-duration="1500">
      <div>
        <div className="event-dtl-img">
          <img
            src={event.image2}
            alt={event.title}
            className="event-detail-image"
          />
        </div>
        <div className="event-dtl-desc" >
          <h1>{event.title}</h1>
          <div className="date-location">

          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          </div>
          <p className="event-dtl-description">{event.description}</p>
          <Link className="event-detail-btn" to="/events">Back to Event List</Link>
        </div>

      </div>  
      <div className="get-start">

    
</div>

<div className="get-start-section" data-aos="fade-up" data-aos-duration="1500">
        <div>
        <div>Request Early acess to get started! </div>
        <div>Register today & start exploring the endless possibilities!</div>
        </div>
        <button>Get Started!</button>
      </div>
    </div>
  );
};

export default EventDetail;
