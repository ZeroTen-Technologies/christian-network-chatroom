const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 8080;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/signin.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/register.html'));
});




server.listen(port , ()=>{
  console.log("Server running on port : " + port);
  console.log('Press Ctrl+C to quit.');
})
 
 
