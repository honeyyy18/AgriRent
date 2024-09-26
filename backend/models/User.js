const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define your user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pin_code: { type: String, required: true },
  // phone_number: { type: String, unique: true, sparse: true } // Using `sparse` allows for multiple null values
}, { timestamps: true });


// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the input password with the hashed password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Export the user model
module.exports = mongoose.model('User', userSchema);
