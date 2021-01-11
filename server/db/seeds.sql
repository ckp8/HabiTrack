DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS habits;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(20) NOT NULL,
    UNIQUE (email)
);

INSERT INTO users 
    (username, email, password)
VALUES
    ('test1', 'test1@gmail.com', '$2b$10$hlE6eRv//VgUa7lIREtUbuRvyq8pqCr7Cu3mVtv757M4mcwHMKTT2'),
    ('test2', 'test2@gmail.com', '$2b$10$sMq2GR7ZERkJ/mEl0v/8sOy4Os0d1kLOkg6abEr0X4.HHYTBYZ8e6')
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