const router = require('express').Router();
const userRoutes = require('./userRoutes');
const questionRoutes = require('./questionRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/scores', scoreRoutes);
router.use('/users', userRoutes);
router.use('/questions', questionRoutes);

module.exports = router;
