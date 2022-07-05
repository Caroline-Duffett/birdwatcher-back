# birdwatcher-back
Backend to the Birdwatcher app. This is my capstone project for General Assembly.

## Explanation of the technologies used
This servers as the backend to a MEAN application with full CRUD capabilities. Users can create, view, edit, and delete birds. For development of the backend, Node.js, Express.js, Mongoose, CORS, and dotenv were used. I set up a controllers directory, which contains the bird’s controller. Currently, there are routes for create, read, delete, update, show, and a seed data route in the bird’s controller. I also made a models directory that holds the bird schema and seed data. Heroku was used to deploy the backend and MongoDB Atlas was used as the database.

## Approach taken
To start I set up my server.js with everything I was going to need. Then I created my bird’s controller and model. After that I made sure everything was connected and working properly. To do this I test each route in Postman and made sure the MongoDB Atlas was registering the changes. I also included error handling in my routes and server.js to help me know if something goes wrong. Once the frontend was set up, I made sure it was working with the backend as well. After I knew everything was working properly, I created the seed data file in the models directory.

## Links
 - GitHub frontend: https://bird-watcher-front.herokuapp.com/welcome
 - GitHub backend: https://bird-watcher-back.herokuapp.com/birds
 - Heroku app frontend: https://github.com/Caroline-Duffett/birdwatcher-front
 - Heroku app backend:  https://github.com/Caroline-Duffett/birdwatcher-back

## Installation Instructions
To access the app users should open the frontend on Heroku. If you open the backend, you can see that data if you would like. Nothing needs to be installed to use the app.


## Unsolved Problems
Currently user authentication does not work. If you check userauth branch you will see files that are not included in the final product. This is because I could not get user authentication working on the frontend. I think the backend portion was working properly, at least it appeared that way on Postman. For more details on what went wrong checkout the frontend ReadMe.


## Sources
- I used my previous projects as a reference.
