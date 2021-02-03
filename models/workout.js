// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js')

// Create code that will call the ORM functions



const workout = {
  all(cb) {
    orm.all('workouts', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('workouts', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('workouts', objColVals, condition, (res) => cb(res));
  }
};

module.exports = workout
;