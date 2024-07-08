import React from "react";
import './../assets/css/viewevent.css'

const events = [
  { id: 1, name: 'Wedding Event', date: '2024-07-15', location: 'New York' },
  { id: 2, name: 'Birthday Party', date: '2024-07-20', location: 'Los Angeles' },
  { id: 3, name: 'Sports Event', date: '2024-08-01', location: 'Chicago' },
  { id: 4, name: 'Tech Conference', date: '2024-08-05', location: 'San Francisco' },
  { id: 5, name: 'Music Festival', date: '2024-08-10', location: 'Austin' },
  { id: 6, name: 'Art Exhibition', date: '2024-08-15', location: 'Miami' },
  { id: 7, name: 'Corporate Meeting', date: '2024-08-20', location: 'Seattle' },
  { id: 8, name: 'Food Festival', date: '2024-08-25', location: 'Houston' },
  { id: 9, name: 'Fashion Show', date: '2024-09-01', location: 'New York' },
  { id: 10, name: 'Charity Run', date: '2024-09-05', location: 'Los Angeles' },
  { id: 11, name: 'Book Launch', date: '2024-09-10', location: 'Chicago' },
  { id: 12, name: 'Film Premiere', date: '2024-09-15', location: 'San Francisco' },
  { id: 13, name: 'Yoga Retreat', date: '2024-09-20', location: 'Austin' },
  { id: 14, name: 'Dance Competition', date: '2024-09-25', location: 'Miami' },
  { id: 15, name: 'Science Fair', date: '2024-10-01', location: 'Seattle' },
];

const ViewEvents = () => {
  return (
    <div className="view-events">
      <h2>View Events</h2>
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
