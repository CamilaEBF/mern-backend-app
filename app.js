const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/mern');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');


bookRouter.route('/books')
  .get((req, res) => {
    const response = {hello: 'This is my API'};
    res.status(200).json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});