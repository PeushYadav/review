const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Required to parse JSON body

app.use('/api/users', userRoutes); // ✅ Mount user routes

module.exports = app;
