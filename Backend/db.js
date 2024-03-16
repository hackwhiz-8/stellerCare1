const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/?directConnection=true&readPreference=primary'


const connectToMongo =() =>{

  mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
   
};

module.exports = connectToMongo;