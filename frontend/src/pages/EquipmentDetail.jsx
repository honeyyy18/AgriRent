import React from 'react';
import Chat from '../components/Chat';

const EquipmentDetail = ({ equipment }) => {
  return (
    <div>
      <h2>{equipment.name}</h2>
      <p>{equipment.description}</p>
      <p>Available: {equipment.availability}</p>
      <p>Price: ${equipment.price}</p>

      <Chat user1={equipment.owner.username} user2="User2Username" />
    </div>
  );
};

export default EquipmentDetail;
