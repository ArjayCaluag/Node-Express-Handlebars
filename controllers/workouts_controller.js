const express = require('express');


const router = express.Router();

const workout = require('../models/workout.js');
// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    workout.all((data) => {
      const hbsObject = {
        workouts: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/workouts', (req, res) => {
    workout.create(['workout_name', 'completed'], [req.body.workout_name, req.body.completed], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put('/api/workouts/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    workout.update(
      {
        completed: req.body.completed,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

module.exports = router;