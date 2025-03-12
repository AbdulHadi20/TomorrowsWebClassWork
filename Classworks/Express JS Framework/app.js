const express = require('express');  // importing epxress module
const app = express(); // creating express app


// creating a server
app.get('/', (req, res) => {
  res.send('Hello World');  // sending response
});

// starting server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});