const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// Middleware
app.use(express.json());

// Serve static files i.e index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

// API endpoint
app.get('/api/greet', (req, res) => {
  const { name } = req.query;
  
  // Check for name parameter exists
  if (!name) {
    return res.status(400).json({
      error: "Name is required."
    });
  }
  
  //return greeting with user name
  return res.json({
    message: `Hello, ${name}! Welcome to Younglabs.`
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});