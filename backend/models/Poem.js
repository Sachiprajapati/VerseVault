// const mongoose = require('mongoose');

// const poemSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   category: String,
//   content: String,
//   tags: [String],
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Poem', poemSchema);

const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  content: String,
  tags: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Poem', poemSchema);
