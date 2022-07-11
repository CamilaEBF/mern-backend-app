const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const app = express();

const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost:27017/mern')
.then(() => { console.log('Connected to MongoDB: %s \n ') }) 
.catch(() => { console.log('MongoDB connection error: %s \n') });

const bookRouter = express.Router();

//http://localhost:3030/api/books

bookRouter.route('/books')
  .get((req, res) => {
    console.log('req ', req);
    Book.find(
      (err, books) => {
        if (err) {
          return res.status(500).send('sad');
        }

        return res.json(books);
      }
    );
  });

  bookRouter.route('/books/:bookId')
  .get((req, res) => {
    console.log('req ', req);
    Book.findById(
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
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});