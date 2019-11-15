const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: String
});

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: String, // {type: String}
  address: addressSchema,
});

const Contact = mongoose.model('Contact', schema);

module.exports = Contact;
