const router = require('express').Router();
const db = require('../../config/connection');
const { User } = require('../../models');

router.get("/all", (req, res) => {
    User.find()
        .then(dbuser => {
            res.json(dbuser);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/:id", (req, res) => {
    
})


module.exports = router;
