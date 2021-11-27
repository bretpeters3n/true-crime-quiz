const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");
const ScoreSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

const Score = model("Score", ScoreSchema);

module.exports = Score;