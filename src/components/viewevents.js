import React from "react";
import './../assets/css/viewevent.css'
import { Link } from 'react-router-dom';

const events = [
  { id: 1, name: 'Wedding of Ananya & Raj', date: '2024-07-15', location: 'Mumbai' },
  { id: 2, name: 'Birthday Bash of Aryan', date: '2024-07-20', location: 'Delhi' },
  { id: 3, name: 'Startup Expo', date: '2024-08-01', location: 'Bangalore' },
  { id: 4, name: 'Classical Music Concert', date: '2024-08-05', location: 'Chennai' },
  { id: 5, name: 'Art Exhibition by Priya', date: '2024-08-10', location: 'Kolkata' },
  { id: 6, name: 'Corporate Meeting for Infosys', date: '2024-08-15', location: 'Hyderabad' },
  { id: 7, name: 'Gourmet Food Festival', date: '2024-08-20', location: 'Ahmedabad' },
  { id: 8, name: 'Fashion Show by Manish Malhotra', date: '2024-08-25', location: 'Mumbai' },
  { id: 9, name: 'Marathon for Charity', date: '2024-09-01', location: 'Delhi' },
  { id: 10, name: 'Science Fair at IIT', date: '2024-09-05', location: 'Kanpur' },
  { id: 11, name: 'Book Launch by Amish Tripathi', date: '2024-09-10', location: 'Pune' },
  { id: 12, name: 'Film Festival', date: '2024-09-15', location: 'Goa' },
  { id: 13, name: 'Tech Talk by Sundar Pichai', date: '2024-09-20', location: 'Bangalore' },
  { id: 14, name: 'Dance Competition', date: '2024-09-25', location: 'Chennai' },
  { id: 15, name: 'Charity Dinner', date: '2024-10-01', location: 'Hyderabad' },
  { id: 16, name: 'Yoga Retreat', date: '2024-10-05', location: 'Rishikesh' },
  { id: 17, name: 'Diwali Fest', date: '2024-10-10', location: 'Varanasi' },
  { id: 18, name: 'Product Launch by Tata', date: '2024-10-15', location: 'Mumbai' },
  { id: 19, name: 'Poetry Slam', date: '2024-10-20', location: 'Kolkata' },
  { id: 20, name: 'Stand-Up Comedy Night', date: '2024-10-25', location: 'Delhi' },
  { id: 21, name: 'Health & Wellness Expo', date: '2024-11-01', location: 'Pune' },
  { id: 22, name: 'Art Fair', date: '2024-11-05', location: 'Jaipur' },
  { id: 23, name: 'Photography Workshop', date: '2024-11-10', location: 'Bangalore' },
  { id: 24, name: 'Winter Music Fest', date: '2024-11-15', location: 'Shimla' },
  { id: 25, name: 'Christmas Carnival', date: '2024-12-01', location: 'Goa' },
  { id: 26, name: 'New Year’s Eve Gala', date: '2024-12-31', location: 'Delhi' },
  { id: 27, name: 'Republic Day Parade', date: '2024-01-26', location: 'Delhi' },
  { id: 28, name: 'Holi Celebration', date: '2024-03-10', location: 'Mathura' },
  { id: 29, name: 'Independence Day Festivities', date: '2024-08-15', location: 'Delhi' },
  { id: 30, name: 'Navratri Dance Festival', date: '2024-09-29', location: 'Ahmedabad' },
];


const ViewEvents = () => {
  return (
    <div className="view-events">
      <div className="events-header"><h2>View Events</h2><Link to='/admin/add-event'><button>Add Event</button></Link></div>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <table className="events-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewEvents;
