const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, and JS files)
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded user data for demonstration purposes
const users = {
  user1: 'password123',
  user2: 'mypassword'
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'log.html'));
});

app.get('/log', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'log.html'));
});

app.post('/log', (req, res) => {
  const { login_id, password } = req.body;

  if (users[login_id] && users[login_id] === password) {
    res.redirect('/info.html');
  } else {
    res.send('Invalid login credentials');
  }
});

// Route to handle info page
app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'info.html'));
});

// Route to handle signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'book.html'));
  });

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
