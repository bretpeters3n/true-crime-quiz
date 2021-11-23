const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);

module.exports = User;
