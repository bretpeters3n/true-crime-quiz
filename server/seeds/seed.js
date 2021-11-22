const db = require('../config/connection');
const { User, Question } = require('../models');

const question = require('./question.json');
const user = require('./user.json');

db.once('open', async () => {
    // clean database
    await User.deleteMany({});
    await Question.deleteMany({});


    const users = await User.insertMany(user);
    const questions = await Question.insertMany(question);


  console.log('all done!');
  process.exit(0);
});
