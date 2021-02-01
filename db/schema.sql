CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)