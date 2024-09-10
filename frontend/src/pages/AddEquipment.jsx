import React, { useState } from 'react';
import axios from 'axios';

const AddEquipment = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/equipment/add', {
        name,
        description,
        availability,
        price,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Availability:</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Add Equipment</button>
      </form>
    </div>
  );
};

export default AddEquipment;
