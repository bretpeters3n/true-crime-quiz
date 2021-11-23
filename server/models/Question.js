const { Schema, model } = require('mongoose');
const mongoose = require('../config/connection')

const QuestionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
    },
    answerOptions: {
        type: Array,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

const Question = model('Question', QuestionSchema);

module.exports = Question;