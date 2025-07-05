const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // ✅ Required to parse JSON body

app.use('/api/users', userRoutes); // ✅ Mount user routes

module.exports = app;
