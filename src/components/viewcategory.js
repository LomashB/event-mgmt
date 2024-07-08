import React from "react";
import './../assets/css/viewcategory.css'
import {Link} from 'react-router-dom'

const categories = [
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Birthday Party' },
  { id: 3, name: 'Sports Event' },
  { id: 4, name: 'Music Concert' },
  { id: 5, name: 'Art Exhibition' },
  { id: 6, name: 'Corporate Seminar' },
  { id: 7, name: 'Food Festival' },
  { id: 8, name: 'Fashion Show' },
  { id: 9, name: 'Marathon' },
  { id: 10, name: 'Science Fair' },
  { id: 11, name: 'Book Launch' },
  { id: 12, name: 'Film Festival' },
  { id: 13, name: 'Cultural Fest' },
  { id: 14, name: 'Yoga Retreat' },
  { id: 15, name: 'Tech Conference' },
];


const ViewCategory = () => {
  return (
    <div className="view-category">
      <div className="events-header"><h2>View Categories</h2><Link to='/admin/add-category'><button>Add category</button></Link></div>
      <ul>
        {categories.length === 0 ? (
          <p>No categories available.</p>
        ) : (
          categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewCategory;
