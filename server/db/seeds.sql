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
    completed BOOLEAN,
    user_id INT
);

INSERT INTO users (username, password)
VALUES
(
    'Test_User',
    '12345'
);

INSERT INTO habits (title, description, completed, user_id)
VALUES
(
    'Test Habit 1',
    'My first habit with this app',
    FALSE,
    1
);