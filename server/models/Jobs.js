const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobsSchema = new Schema({
  addedDate: {
    type: Date,
    default: Date.now
  },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
});

const Jobs = mongoose.model('Jobs', jobsSchema);

module.exports = Jobs;
