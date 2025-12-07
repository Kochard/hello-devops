
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, DevOps – updating server.js file to make a new branch');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});