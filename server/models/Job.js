const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema({
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
  
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
