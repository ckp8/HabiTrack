const SQL = require("sql-template-strings");
const db = require('../dbconfig');

module.exports = class User {
    constructor(data){
        this.id = data.id;
        this.username = data.username;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT * FROM users;`)              //Queries might change
                const users = result.rows.map(user => ({ id: user.id, name: user.username }))    //Returns might change
                resolve(users);
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    };

    get habits(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT id, title FROM habits WHERE user_id = ${this.id}`);      //Queries might change
                const habits = result.rows.map(habit => ({title: habit.title, path: `/habits/${habit.id}`}));   //Returns might change
                resolve(habits);
            } catch (err) {
                reject("User's habits could not be found");
            };
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.run(SQL`DELETE FROM users WHERE id = ${this.id} RETURNING id`);
                resolve(`User ${result.id} was deleted`)
            } catch (err) {
                reject('User could not be deleted')
            }
        })   
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.run(SQL`SELECT * FROM users WHERE id = ${id};`);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found');
            };
        });
    };

    static create(username, password){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.run(SQL`INSERT INTO users (username, password) VALUES (${username}, ${password}) RETURNING *;`);
                let user = new User(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('User could not be created');
            };
        });
    };

    static findOrCreateByName(username){
        return new Promise (async (resolve, reject) => {
            try {
                let user;
                const userData = await db.run(SQL`SELECT * FROM users WHERE username = ${username};`);
                if(!userData.rows.length) {
                    user = await User.create(username);     //This needs also a password parameter if we want to implement it
                } else {
                    user = new User(userData.rows[0]);
                };
                resolve(user);
            } catch (err) {
                reject(err);
            };
        });
    };
};