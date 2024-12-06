const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  task: { type: String, required: true },
  tags: [{ type: String }]
});

module.exports = mongoose.model('Points', PointSchema);
