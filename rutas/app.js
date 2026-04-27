const express = require('express');

const path = require('path');
const pagesRoutes = require('./routes/pages');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));

// Routes
app.use('/', pagesRoutes);

//configuracion de pagina principal
app.get('/', (req, res) => {
    res.redirect('/page1');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


