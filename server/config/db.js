'use strict';

const mongoose = require('mongoose');

const dbURI = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
