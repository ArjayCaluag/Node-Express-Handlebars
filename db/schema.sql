DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;

USE workouts_db;

CREATE TABLE workouts (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    workout_name varchar(255),
    completed BOOLEAN
);
