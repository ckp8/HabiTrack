const Habit = require('../models/Habit');

function index (req, res) {
    Habit.all
        .then(habits => res.status(200).json(habits))
        .catch(err => res.status(500).json({err}))
}

function show (req, res) {
    Habit.findById(req.params.id)
        .then(habit => res.status(200).json(habit))
        .catch(err => res.status(404).json({err}))
}

function create (req, res) {
    Habit.create(req.body)
        .then(habit => res.status(200).json(habit))
        .catch(err => res.status(422).json({err}))
}

async function destroy (req, res) {
    try {
        const habit = Habit.findById(req.params.id);
        const resp = habit.destroy();
        res.status(200).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, destroy }
