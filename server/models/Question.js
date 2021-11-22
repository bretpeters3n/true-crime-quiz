const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    option: {
        type: [String],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   }

});

const Question = model('Question', QuestionSchema);

module.exports = Question;