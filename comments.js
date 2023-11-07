// Create web server

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');

// Load models
const Comments = require('../models/comments');

// Configure router
const commentRouter = express.Router();

// Use body parser to parse data in body of request
commentRouter.use(bodyParser.json());

// Configure routes
commentRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); });