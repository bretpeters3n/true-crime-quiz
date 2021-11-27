const router = require('express').Router();
const db = require('../../config/connection');
const mongojs = require("mongojs");
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

router.get("/:id", ({ params }, res) => {
    User.findById(
        {
            _id: mongojs.ObjectId(params.id)
        })
        .then(dbuser => {
            res.json(dbuser);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/new", ({ body }, res) => {
    const user = body;

    User.create(user, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});

router.put("/update/:id", (req, res) => {
    const user = req.body;
    User.findByIdAndUpdate(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: user
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

router.delete("/delete/:id", (req, res) => {
    User.findByIdAndDelete(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                res.send(edited);
            }
        }
    );
});

module.exports = router;
