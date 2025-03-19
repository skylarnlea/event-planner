const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');

app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/rsvp', rsvpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));