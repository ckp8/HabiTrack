const SQL = require("sql-template-strings");
const db = require("../dbconfig");

module.exports = class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
  }

  static async all(req, res) {
    try {
      let result = await db.query("SELECT * FROM users");
      let users = result.rows.map((user) => ({
        id: user.id,
        name: user.username,
      }));
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error retrieving users");
    }
  }

  static async habits(req, res) {
    try {
      let result = await db.query(
        "SELECT u.username, h.user_id, h.id as habit_id, h.title FROM habits h join users u on h.user_id = u.id WHERE u.id = $1",
        [req.params.id]
      );
      res.json(result.rows);
    } catch (err) {
      res.status(500).send("Error retrieving users habits");
    }
    //Queries might change
    // const habits = result.rows.map((habit) => ({
    //   title: habit.title,
    //   path: `/habits/${habit.id}`,
    // })); //Returns might change
  }

  static async findById(req, res) {
    let userData = await db.query(
      "SELECT id, username FROM users WHERE id = $1;",
      [req.params.id]
    );
    res.json(userData.rows[0]);
  }

  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.run(
          SQL`DELETE FROM users WHERE id = ${this.id} RETURNING id`
        );
        resolve(`User ${result.id} was deleted`);
      } catch (err) {
        reject("User could not be deleted");
      }
    });
  }

  static create(username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await db.run(
          SQL`INSERT INTO users (username, password) VALUES (${username}, ${password}) RETURNING *;`
        );
        let user = new User(userData.rows[0]);
        resolve(user);
      } catch (err) {
        reject("User could not be created");
      }
    });
  }

  static findOrCreateByName(username) {
    return new Promise(async (resolve, reject) => {
      try {
        let user;
        const userData = await db.run(
          SQL`SELECT * FROM users WHERE username = ${username};`
        );
        if (!userData.rows.length) {
          user = await User.create(username); //This needs also a password parameter if we want to implement it
        } else {
          user = new User(userData.rows[0]);
        }
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }
};
