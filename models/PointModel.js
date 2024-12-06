const mongoose = require('mongoose');

// Define the tag schema
const tagSchema = new mongoose.Schema({
  tagname: { type: String, required: true },
  tagColor: { type: String, required: true },
});

// Define the point schema
const pointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  tags: { type: [tagSchema], default: [] },
  task: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 10, required: true },
  rating : {type: Number, default: 5},
});

module.exports = mongoose.model('Point', pointSchema);


