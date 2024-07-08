// src/components/EventList.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import events from "./eventdata";
import "./../assets/css/eventlist.css";

const EventList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events based on the selected category
  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(event => event.category === selectedCategory);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="event-list">
      <div className="top-sec-breadcrumb">
        <div>Our Events</div>
        <div>
          Harmoni <span>Events</span>
        </div>
        <div>Events Page</div>
      </div>

      <div className="top-sec-types">
        <p>Categories</p>
        <ul>
          <li onClick={() => handleCategoryClick("All")} className={selectedCategory === "All" ? "selected" : ""}>All</li>
          <li onClick={() => handleCategoryClick("Wedding")} className={selectedCategory === "Wedding" ? "selected" : ""}>Wedding</li>
          <li onClick={() => handleCategoryClick("Sports")} className={selectedCategory === "Sports" ? "selected" : ""}>Sports Events</li>
          <li onClick={() => handleCategoryClick("Birthday")} className={selectedCategory === "Birthday" ? "selected" : ""}>Birthday Party</li>
          <li onClick={() => handleCategoryClick("Car")} className={selectedCategory === "Car" ? "selected" : ""}>Car</li>
          <li onClick={() => handleCategoryClick("Bus")} className={selectedCategory === "Bus" ? "selected" : ""}>Bus</li>
          <li onClick={() => handleCategoryClick("Call")} className={selectedCategory === "Call" ? "selected" : ""}>Call</li>
          <li onClick={() => handleCategoryClick("Song")} className={selectedCategory === "Song" ? "selected" : ""}>Song</li>
          <li onClick={() => handleCategoryClick("AI")} className={selectedCategory === "AI" ? "selected" : ""}>AI</li>
        </ul>
      </div>

      <div className="event-item-parent">
        {filteredEvents.length === 0 ? (
          <div className="no-events-message">
            <p>No events found for the selected category.</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-item" data-aos="fade-up" data-aos-duration="1500">
              <Link to={`/event/${event.id}`}>
                <img src={event.image} alt={event.title} />
                <div className="event-desc">
                  <h2>{event.title}</h2>
                  <p className="event-date">Date: {event.date}</p>
                  <p className="event-location">Location: {event.location}</p>
                  <button>View Details</button>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventList;
