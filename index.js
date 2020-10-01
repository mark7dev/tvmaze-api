const express = require('express');
const connectDB = require('./config/db');

// Create server
const app = express();

// Connect DB
connectDB();

// Enabled express.json
app.use( express.json({ extended: true }));

// App PORT
const PORT = process.env.PORT || 4000;

// Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to the API REST')
// });

// Routes
app.use('/tvmazeapi/shows', require('./routes/shows'));

// Start App
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})