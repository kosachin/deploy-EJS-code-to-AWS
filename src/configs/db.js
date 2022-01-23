const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://sachin:sachin123@cluster0.9ztpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};