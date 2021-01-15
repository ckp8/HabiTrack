const Habit = require("../models/Habit");
const pool = require("../dbconfig");
const User = require("../models/User");

async function index(req, res) {
  Habit.all(req, res);
  //     .then((habits) => res.status(200).json(habits))
  //     .catch((err) => res.status(500).json({ err }));
}

async function show(req, res) {
  Habit.findById(req, res);
  // .then((habit) => res.status(200).json(habit))
  // .catch((err) => res.status(404).json({ err }));
}

// ***************** BEGINNING *****************
async function create(req, res) {
  // Habit.create(req.body)
  //   .then((habit) => res.status(201).json(habit))
  //   .catch((err) => res.status(422).json({ err }));
  try {
    const {
      title,
      description,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      user_id,
    } = req.body;
    //let user = await User.findOrCreateByName(username);

    let result = await pool.query(
      `INSERT INTO habits (title, description, monday, tuesday, wednesday, thursday, friday, saturday, sunday, user_id)
                                              VALUES
                                                  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                                              RETURNING *`,
      [
        title,
        description,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        user_id,
      ]
    ); //This is probably wrong too
    res.json(result.rows[0]);
  } catch (err) {
    res.status(422).send("Habit could not be created");
  }
}

async function update(req, res) {
  try {
    const habit = await Habit.findById(parseInt(req.params.id));
    const updatedHabit = await habit.update(
      req.body.description,
      req.body.monday,
      req.body.tuesday,
      req.body.wednesday,
      req.body.thursday,
      req.body.friday,
      req.body.saturday,
      req.body.sunday
    );
  } catch (err) {
    res.status(500).json(err);
  }
}
// ***************** END *****************

async function destroy(req, res) {
  try {
    const habit = await Habit.findById(parseInt(req.params.id));
    const resp = await habit.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ err });
  }
  // try {
  //   const result = await db.run(
  //     SQL`DELETE FROM habits WHERE id = ${this.id} RETURNING user_id`
  //   );
  //   const user = await User.findById(result.rows[0].user_id);
  //   const habits = await user.habits;
  //   if (!habits.length) {
  //     await user.destroy();
  //   } // we probably don't want to delete the user if he has no habits
  //   resolve("Habit was deleted");
  // } catch (err) {
  //   reject("Habit could not be deleted");
  // }
}

// ***************** END *****************

module.exports = { index, show, create, update, destroy };
