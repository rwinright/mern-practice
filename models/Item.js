const Mongoose = require('mongoose');

let Schema = Mongoose.Schema;

let ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Item = Mongoose.model("item", ItemSchema);

module.exports = Item;