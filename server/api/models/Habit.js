const SQL = require("sql-template-strings");
const db = require("../dbconfig");

const User = require("./User");

module.exports = class Habit {
  constructor(data, user) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.abstract = data.abstract;
    this.user = { username: data.username, path: `/users/${data.user_id}` };
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.run(
          SQL`SELECT id, title, user_id FROM habits`
        );
        let habits = habitData.rows.map((b) => new Habit(b));
        resolve(habits);
      } catch (err) {
        reject("Habit not found");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.run(SQL`SELECT habits.*, users.username as username
                                                    FROM habits
                                                    JOIN users ON users.id = habits.user_id
                                                    WHERE habits.id = ${id};`); //This is probably wrong
        let habit = new Habit(habitData.rows[0]);
        resolve(habit);
      } catch (err) {
        reject("Habit not found");
      }
    });
  }

  static async create(habitData) {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          title,
          description,
          username,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        } = habitData;
        let user = await User.findOrCreateByName(username);
        let result = await db.run(SQL`INSERT INTO habits
                                                    (title, description, user_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                                                VALUES
                                                    (${title}, ${description}, ${user.id}, ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday})
                                                RETURNING *`); //This is probably wrong too
        resolve(result.rows[0]);
      } catch (err) {
        reject("Habit could not be created");
      }
    });
  }


    // update(habitData) {
    //     return new Promise(async (resolve,reject) => {
    //         try {
    //             const { description, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = habitData
    //             let updatedHabitData = await db.run(SQL`UPDATE habits
    //                                                     SET (description = ${description} 
    //                                                         monday = ${monday}
    //                                                         tuesday = ${tuesday}
    //                                                         wednesday = ${wednesday}
    //                                                         thursday = ${thursday}
    //                                                         friday = ${friday}
    //                                                         saturday = ${saturday}
    //                                                         sunday =  ${sunday})
    //                                                     WHERE id = ${this.id} 
    //                                                     RETURNING *`)    //This might be wrong
    //             let updatedHabit = new Habit(updatedHabitData.rows[0]);
    //             resolve (updatedHabit)
    //         } catch(err) {
    //             reject ('Error updating habit')
    //         }
    //     })
    // }

    // updateCounter() {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let updatedHabitCounterData = await db.run(SQL`UPDATE habits SET times_completed = times_completed + 1 WHERE id = ${this.id} RETURNING *`)
    //             let updatedHabitCounter = new Habit(updatedHabitCounterData.rows[0])
    //             resolve(updatedHabitCounter)
    //         } catch(err) {
    //             reject('Error updating habit counter')
    //         }
    //     })
    // }

  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.run(
          SQL`DELETE FROM habits WHERE id = ${this.id} RETURNING user_id`
        );
        const user = await User.findById(result.rows[0].user_id);
        const habits = await user.habits;
        if (!habits.length) {
          await user.destroy();
        } // we probably don't want to delete the user if he has no habits
        resolve("Habit was deleted");
      } catch (err) {
        reject("Habit could not be deleted");
      }
    });
  }
};
