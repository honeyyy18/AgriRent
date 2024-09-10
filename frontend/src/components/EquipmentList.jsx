import React, { useEffect, useState } from 'react';
import { getAllEquipment } from '../services/api';

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const fetchEquipment = async () => {
      const { data } = await getAllEquipment();
      setEquipment(data);
    };
    fetchEquipment();
  }, []);

  return (
    <div>
      {equipment.map((eq) => (
        <div key={eq._id}>
          <h3>{eq.name}</h3>
          <p>{eq.description}</p>
          <p>Available: {eq.availability}</p>
          <p>Price: ${eq.price}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
