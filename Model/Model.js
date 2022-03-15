const mongoose = require("mongoose");
const testData = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  stark: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const testModel = mongoose.model("TestData", testData);
module.exports = testModel;
