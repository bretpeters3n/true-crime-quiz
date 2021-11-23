const router = require('express').Router();
const db = require('../../config/connection');
const { Question } = require('../../models');

router.get("/all", (req, res) => {
    Question.find()
        .then(dbQuestions => {
            res.json(dbQuestions);
        })
        .catch(err => {
            res.json(err);
        });
})


module.exports = router;
