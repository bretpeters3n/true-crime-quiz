const router = require('express').Router();
const db = require('../../config/connection');
const mongojs = require("mongojs");
const { Score } = require('../../models');

router.get("/all", (req, res) => {
    Score.find()
        .then(dbscore => {
            res.json(dbscore);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;