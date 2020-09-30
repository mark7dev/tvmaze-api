const express = require('express');

// Create server
const app = express();

// App PORT
const PORT = process.env.PORT || 4000;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API REST')
});

// Start App
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})