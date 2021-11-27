const router = require('express').Router();
const db = require('../../config/connection');
const mongojs = require("mongojs");
const { Question } = require('../../models');

router.get("/all", (req, res) => {
    Question.find()
        .then(dbQuestions => {
            console.log(dbQuestions)
            res.json(dbQuestions);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/:id", ({ params }, res) => {
    Question.findById(
        {
            _id: mongojs.ObjectId(params.id)
        })
        .then(dbquestion => {
            res.json(dbquestion);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/update/:id", (req, res) => {
    Question.findByIdAndUpdate(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

router.post("/new", ({body}, res) => {
    // const question = new Question({
    //     questionText: req.body.questionText,
    //     answerOptions: req.body.answerOptions
    // })
    const question = body;

    Question.create(question, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});

router.delete("/delete/:id", (req, res) => {
    Question.findByIdAndDelete(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (error) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log('deleted!')
            }
        }
    );
});


module.exports = router;
