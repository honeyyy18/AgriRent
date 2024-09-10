const Equipment = require('../models/Equipment');

exports.addEquipment = async (req, res) => {
  const { name, description, availability, price } = req.body;

  try {
    const equipment = new Equipment({
      name,
      description,
      availability,
      price
    });
    
    await equipment.save(); // Save to the database
    
    res.status(201).json({ message: 'Addded successfully!', equipment });
    
  } catch (err) {
    console.error('Error adding equipment:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
