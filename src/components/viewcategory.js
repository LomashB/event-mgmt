import React from "react";
import './../assets/css/viewcategory.css'


const categories = [
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Birthday Party' },
  { id: 3, name: 'Sports Event' },
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Birthday Party' },
  { id: 3, name: 'Sports Event' },
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Birthday Party' },
  { id: 3, name: 'Sports Event' },
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Birthday Party' },
  { id: 3, name: 'Sports Event' },
];

const ViewCategory = () => {
  return (
    <div className="view-category">
      <h2>View Categories</h2>
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
