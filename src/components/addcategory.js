import './../assets/css/addcategory.css'

import React, { useState } from 'react';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Category added:', categoryName);
  };

  return (
    <div className="add-category">
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
