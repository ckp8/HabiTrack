DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;
-- DROP DATABASE IF EXISTS habit;

-- CREATE DATABASE habit;

-- requires uuid-ossp extension
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
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
    title VARCHAR(200) NOT NULL,
    description VARCHAR(200),
    created_on DATE NOT NULL DEFAULT CURRENT_DATE,
    monday BOOLEAN DEFAULT FALSE,
    tuesday BOOLEAN DEFAULT FALSE,
    wednesday BOOLEAN DEFAULT FALSE,
    thursday BOOLEAN DEFAULT FALSE,
    friday BOOLEAN DEFAULT FALSE,
    saturday BOOLEAN DEFAULT FALSE,
    sunday BOOLEAN DEFAULT FALSE,
    times_completed int DEFAULT 0,
    user_id INT NOT NULL
);


INSERT INTO habits (title, description, monday, tuesday, wednesday, thursday, friday, saturday, sunday, completed, user_id)
VALUES
(
    'Test Habit 1',
    'My first habit with this app',
    TRUE,
    FALSE,
    TRUE,
    FALSE,
    TRUE,
    FALSE,
    TRUE,
    3,
    1
),
(
    'Test Habit 2',
    'My second habit with this app',
    FALSE,
    TRUE,
    FALSE,
    TRUE,
    FALSE,
    FALSE,
    TRUE,
    4,
    1
);