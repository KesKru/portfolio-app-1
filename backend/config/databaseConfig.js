const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/portfolio-app-1', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => {
    console.log(err);
  });
