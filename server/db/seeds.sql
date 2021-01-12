DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;
-- DROP DATABASE IF EXISTS habit;

-- CREATE DATABASE habit;

-- requires uuid-ossp extension
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(20) NOT NULL
);

-- dummy data
INSERT INTO users 
    (username, email, password)
VALUES
    ('test1', 'test1@gmail.com', 'password1234'),
    ('test2', 'test2@gmail.com', 'password4321')
;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(200),
    completed BOOLEAN,
    user_id INT
);


INSERT INTO habits (title, description, completed, user_id)
VALUES
(
    'Test Habit 1',
    'My first habit with this app',
    FALSE,
    1
);