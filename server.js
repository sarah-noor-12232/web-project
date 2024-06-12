const express = require('express');
const app = express();
app.use(express.json());

let users = []; // This will act as our "database"

app.get('/v1/users', (req, res) => {
  res.json(users);
});

app.post('/v1/users', (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));