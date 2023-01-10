const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const routes = require('./server/routes/routes');

// adding cors policy
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// environment variables and file setup
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: "config.env" });

// mongodb connection
const connectDB = require('./server/database/connectdb');
connectDB();

// port declaration
const port = process.env.PORT;

// Load routes
app.use('/api', routes);

// server start script
app.listen(port, () => {
    console.log(`Successfully connected to the port ${port}`);
})