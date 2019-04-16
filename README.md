# MongoDB Introduction

## Setup
If you do not have mongo installed on your machine, do it now:
(Install the community edition)
https://docs.mongodb.com/manual/installation/

When ready, open a separate terminal window and run `mongod`
We will leave that connection open the entire time we are working
on our application

As always, run `npm i` & `npm start`

## Investigation
Look around the codebase for this project. You should notice a few things:
1. An express folder with routes and controllers
2. A mongo folder with models and schemas
3. The app runs on localhost:4001

Get familiar with these, specifially the mongo schema and model.. because we will be adding more later

*Note: All routes with use either the browser, or postman

## Users CRUD
We are going to walk through the basic CRUD commands for a collection of users. All code manipulation will occur in either the controllers file or the routes file and sometimes you will need to update both. Make sure to check, even if the instructions don't specify. 

### Part 1 - POST (Create)

1. In the UsersController (`express/controllers/users.js`), fill out the `createDefault` function so that it inserts the default user into the database

2. Make a POST request to `/users/default`. Did it do what we expected? How do we know?
  - Skip down to the section titled `Viewing your data`
  - Is there any data?

3. Make a POST request to `/users` and include a body with a name and age. Modify the appropriate functions in `routes.js` and `controllers.js` to insert this user into the database

4. Repeat step 3, three more times with unique users

### Part 2 - GET (Read)

1. Make a GET request to the `/users` route. What do you see?
  - Hint: It should be all the users

2. Update the `getOne` function in the controller to find ONLY ONE user by it's name

3. Make a GET request to `/users/:name` replacing the ":name" variable with an actual name of one of your users
  - What do you get?

4. Now repeat step 3 with the name `maxamillion`, which hopefully doesn't exist in your database
  - What did you get this time?
  - Did you notice the status code?
  - How did we handle that? Find it in the code

### Part 3 - PUT (Update)

1. Modify the code in the `updateUser` function in the controller to update ONLY ONE user by it's name. Update the user with the body of the request you are passing in.

2. Run the GET request for that user (Part 2, Step 3) to verify the user has been updated

### Part 4 - DELETE (Delete)

1. Modify the code in the `deleteUser` function in the controller to delete ONLY ONE user by it's name.

2. Run the GET request for that user (Part 2, Step 3) to verify the user has been deleted


## Viewing your data
After we perform some operations, we may want to verify that the data is in our database as we intended. To interact with our local database we need to do a few things:
1. Open a new terminal and run the `mongo` command anywhere. You should be connected to your database
2. Type `show dbs`, you should see a couple
3. We want to access the `admin` database so type `use admin`
4. Now type `show collections`. This shows us all the tables (called "collections") that our data lives in. Let's look at `users`
5. Type `db.users.find()` to see what's in the users collection

## Deleting your data
1. Run `db.users.deleteMany({})` replacing the word "users" with the appropriate collection name