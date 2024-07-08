// src/components/EventList.js

import React from "react";
import { Link } from "react-router-dom"; 
import events from "./mybookingdata"; 
import "./../assets/css/mybookings.css";
import "./../assets/css/eventlist.css";

const EventList = () => {
  return (
    <div className="event-list">
      <div className="top-sec-breadcrumb" data-aos="fade-up" data-aos-duration="1500">
        <div>Your Bookings</div>
        <div>
          Harmoni <span>Events</span>
        </div>
        <div>Events Page</div>
      </div>

    

      <div className="event-item-parent"> 

      {events.map((event) => (
        <div key={event.id} className="event-item" data-aos="fade-up" data-aos-duration="1500">
          <Link to={`/event/${event.id}`}>
          <img src={event.image}></img>
          <div className="event-desc">
          <h2>{event.title}</h2>
          <p className="event-date">Date: {event.date}</p>
          <p className="event-location">Location: {event.location}</p>
          <button>View Details</button>
          </div>
          </Link>
        </div>
      ))}
      </div>


    </div>
  );
};

export default EventList;
