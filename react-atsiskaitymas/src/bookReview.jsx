
import React, { useState } from 'react';

export const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    review: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you, ${formData.name}, for your review!`);
    // Reset form fields
    setFormData({
      name: '',
      title: '',
      review: ''
    });
  };

  return (
    <div>
      <h1>Parasyti atsiliepima</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vardas:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Pavadinimas:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Apzvalga:</label>
          <textarea name="review" value={formData.review} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

