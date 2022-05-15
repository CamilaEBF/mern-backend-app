const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/mern');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');


bookRouter.route('/books')
  .get((req, res) => {
    Book.find(
      (err, books) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.json(books);
      }
    );
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});