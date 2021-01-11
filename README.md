# HabiTrack

*Do you find hard to adobt new habits or be consistant with the one you already have? Then HabiTrack is the app for you!
Just login to your personal account from where you can keep track of all your current habits.
New to our application? All you have to do is create a new account and choose a new habit for you to keep track of!*


## Installation

In order to run our project you need first to install all the necessary dependencies: 

- First `git clone` to download the repository
- Then `cd server` to go inside the server folder, followed by a `docker-compose up`.
This will install all necessary server dependencies, create the containers and get the server and database up and running.

- Then `cd ../client` to go inside the client folder, followed by a `npm install` to get all the necessary dependencies.
- After that you can `npm run start` to get the client up and running on your browser.

To shutdown any docker-compose enviroment:
- `docker-compose stop` to stop containers (databe data will remain intact)
- `docker-compose down --volume --remove-orphans` to remove containers and volumes (complete teardown)


## Technologies

HTML, CSS, JavaScript, React, docker, postgres, Jest, Enjyme, Netlify


## Development Goals

- Users should be able to create a new account or login to an existing one

- Users should be able to create a new habit or edit an existing one
    - They should also be able to choose the frequency at which they want to track the habit

- Give user the ability to track a habit and mark it as complete for the day

- They should be able to see if they have completed a habit for the day
    - Add the option for the users to see their most recent completion streak


## Future Features

- Implement an email verification process.
- Push notifications for the mobile app to notify the users about their daily progress
- Add dynamicaly created graphs to better display the user's completion streaks


## Wins & Challenges

- Wins
    - 
    - 

- Challenges
    - 
    - 


## Contributors

In no specific order:

[StylianosThomas](https://github.com/StylianosThomas),
[TaraHussain](https://github.com/TaraHussain),
[kail0n](https://github.com/kail0n),
[ckp88](https://github.com/ckp88)
