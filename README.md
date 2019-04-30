# M.E.R.N. Authentication Boilerplate
Full Stack Project starter with basic components routes and authentication. The project is in MVC format that includes the User model and controller. The first routes in the client are protected by the passport authentication using the local strategy. 

## Purpose and Inspiration
You can fork and run this to quickly have an MVC project up and running, then simply add the controllers models and components that your project needs. I wanted to have a place to start with no other models than the User model. This is currently at the point where you can:

## MVC
This project is structured in Full Stack Javascript with Mongoose Models REACT Views and Controllers. The heavy lifting for the authentication is done in src/utils/Auth.js.

- Register a new user
- Login with an existing user
- Log Out

## Tech Stack
+ [MONGOOSE ORM](https://www.npmjs.com/package/mongoose)
+ [EXPRESS](https://www.npmjs.com/package/express)
+ [REACT](https://reactjs.org/)
+ [NODE](https://nodejs.org/en/)
+ [PASSPORT](http://www.passportjs.org/docs/username-password/)

#### Install and run
Install all the dependencies with Yarn or NPM
`yarn install` <br>
Make sure you start Mongod and have mongoDB running..
`mongod` <br>
Then start the project
`yarn start`

## Register a New User
![Register A New User](/client/public/images/Register.png)

## Routes are protected from Users that are not logged in
![Login an existing User](/client/public/images/ProtectedRoute.png)


