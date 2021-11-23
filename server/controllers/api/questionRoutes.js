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
});

router.post("/new", ({ body }, res) => {
    const user = body;

    Question.create(user, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});


module.exports = router;
