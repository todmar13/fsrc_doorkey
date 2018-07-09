// this is surveys 'title-body'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
  title:String,
  subject:String
});

mongoose.model('records', recordSchema);
