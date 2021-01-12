DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
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

INSERT INTO users (username, password)
VALUES
(
    'Test_User',
    '12345'
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