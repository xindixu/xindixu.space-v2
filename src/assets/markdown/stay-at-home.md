# Stay At Home
<https://stay-at-home-and-lets-cook.herokuapp.com/#/home>

## Description
Empty stomach, don't want to get out, only some random stuffs left in your fridge... No worries, just get on this website and search for simple recipes based on the ingredients you've got.

My boyfriend and I created this website for our Web Development class at UT. This website uses the MEAN stack: MongoDB for database, Express.js as backend framework, Angular as frontend framework, and Node.js for backend. The website also connects to a 3rd-party API for recipe search.

## Functionalities
1. Search for recipes based on ingredients on hand
2. Ask nutrition-related questions and get instant response
3. Search for food videos
4. Register/Login to personalize

## Challenges
1. Lack of knowledge on MEAN stack
2. Limited experience working with APIs
3. Not familiar with Google Material Design principles

## Implementations

### Some decisions to make
The first thing we agreed on our project is that we need to have a **well-maintained API** to provide high quality content. We found this Nutrition API, which grants us access to recipe informations and function calls.

Since we have to work with **API** and **user authentication**, we have to build a backend and database for our website. We choose Express.js and Node.js for back-end because they are **written in JS** and MongoDB because it is a **non-relational database**.

For frontend, we favors Angular because: 1) it has a well-organized and easy-to-understand documentation, 2) it use **TypeScript**, 3) it has a great **CLI** to help speed up the process. Although it is harder to learn than Vue.js and React, we still decided to use it.

### Get started
I first started working on setting up both frontend and backend. It was quite challenging. Starting with backend, I set up **Jwt-passport** for user authentication, **routes** for functions related to users logins and API calls. Then, I did some configuration for database and passport.

Then, I started with the frontend. With the help of Angular-CLI, it was quite easy. I set up the routes and a few pages for basic structure of the web app. I also referred to Google Material Design to style the theme and components for the app.

### Highlights
There are several highlights during the implementation process. Some are quite challenging for me to figure out; some deepened my understanding a lot on the technologies I used.

#### 1. User model and authentication
**Backend**
In the backend, I created a file `user.js` under `model` folder. Here, I connected to Mongoose, the database, constructed `UserSchema`, and exports as model for database. I wrote some functions such as `getUserById()` and `getUserByUsername()` with Mongoose built-in functions `findById()` and `findOne()`. Then, I implemented functions to hash and compare passwords with **bcrypt.js**. I used `hash()` function came with bcrypt to to encrypt password when adding users. For comparing passwords, I used `compare()` came with bcrypt.

Then, in the `routes` folder, I started another `user.js` file to call the functions I created in `model/user.js` file and create routes for frontend use. All the method used by router here is `post`. `Register` part is fairly easy: basically create user model with the data from the `request body` and add user to the database. For `authenticate`, it is a little bit more complicated. First, we call function `getUserByUsername()` and check if there is a particular user. Then, we call function `comparePassword()` and set token expire time span. If success, it will response with a user object, token and login status.

**Frontend**
First, I created a `authService.ts` service to hold all login/register related functions. Most of the communication made from frontend to backend is using headers.

Inside the register and login pages I created, I imported the `authService`, and used appropriate functions. Also, I want to hide certain pages such as `profile` from unlogged in users. To do that, I created a `authGuard` that detect logged in status from `authService` component. Also, I removed the link for that page from the navigation bar for better user experience.


#### 2. Consume API


#### 3. Pass data to other pages
