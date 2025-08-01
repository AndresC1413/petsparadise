import {conectoDB} from '../CONFIGDB/conectoDB.js'
import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import petsRoutes from './routes/pets.js'
import usersRoutes from './routes/users.js'
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const petsRoutes = require('./routes/pets');
// const usersRoutes = require('./routes/users');
// const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
// const mongoURI = 'mongodb://localhost:27017/petsparadise';
// mongoose.connect(dbConfig.url, dbConfig.options)
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
conectoDB()

// Routes
app.use('/api/pets', petsRoutes);
app.use('/api/users', usersRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





