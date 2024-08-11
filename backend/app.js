// index.js or app.js
const express = require('express');
const connectToMongo = require('./mongodb.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Middleware and routes go here...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
