
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, DevOps!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});