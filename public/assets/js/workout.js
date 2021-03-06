// Make sure we wait to attach our handlers until the DOM is fully loaded.

document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeWorkoutBtns = document.querySelectorAll('.change-workout');
  
    // Set up the event listener for the create button
    if (changeWorkoutBtns) {
      changeWorkoutBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newWorkout = e.target.getAttribute('data-newworkout');
  
          const newWorkoutState = {
            completed: newWorkout,
          };
  
          fetch(`/api/workouts/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newWorkoutState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed sleep to: ${newWorkout}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createWorkoutBtn = document.getElementById('create-form');
  
    if (createWorkoutBtn) {
      createWorkoutBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newWorkout = {
          workout_name: document.getElementById('ca').value.trim(),
          // devoured: document.getElementById('not-devoured').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/workouts', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newWorkout),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new workout!');
          location.reload();
        });
      });
    }
  });
  