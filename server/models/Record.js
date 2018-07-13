// this is surveys 'title-body'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
  title:String,
  subject:String,
  _user: {type: Schema.Types.ObjectId, ref:"User"}
});

mongoose.model('records', recordSchema);
