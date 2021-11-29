const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");

const QuestionSchema = new Schema({
  questionText: {
    type: String,
    // required: true,
  },
  answerOptions: {
    type: Array,
    // required: true,
  },
  auth_id: {
    type: String,
  },
});

const Question = model("Question", QuestionSchema);

module.exports = Question;
