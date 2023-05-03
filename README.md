# haring-street

## Description

- A web application that allows users to create and share their own recipes.
- Users can create, edit, and delete their own recipes.
- Users can view other users' recipes and save them to their own collection.
- Users can search for recipes by name, ingredients, or tags.
- Users can view their saved recipes and remove them from their collection.
- Other features TBD.

## How to run

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`

### Backend/Server
1. `cd server`
2. `npm install`
3. `npm start`

### Database operations

#### pre-requisites
1. Install postgresql
2. Install knex locally `npm install knex`
3. Install pg package `npm install pg`

#### create migrations
1. ```npx knex migrate:make <migration_name>```
2. Edit the newly created file that is under migrations
3. Follow the sample of the users table
4. ```npx knex migrate:latest```




## Road Map

### Paul
- Create basic frontend and backend
- Set up database
- Implement ElasticUI for frontend
- Containerize all components
- Implement Knex.js for SQL queries
- Implement ElasticSearch for search queries
- Implement bodybuilder.js for ElasticSearch queries
- Implement dataloader for bulk GQL queries
- Future ideas
    - Use architect.io for deployment
    - Find an API that has data we like
    - Implement a python service that takes in data from an API then manipulates it in some custom way and stores in the database
    - TBD as we keep iterating on this project

### Dylan
- Populate Database
    - Use fake data for now (https://fakerjs.dev/)
    - Come up with a schema that makes sense. Start small then we can expand
- Connect Database to backend and create endpoints for frontend to hit
        - GET /recipes
        - GET /recipes/:id
        - POST /recipes (create new)
        - POST /recipes/:id (edit)
        - DELETE /recipes/:id
- More work TBD maybe pick up some of Nick's work if he gets stuck

### Nick
#### User ElasticUI for frontend
- Create basic pages for frontend (this includes setting up routing)
    - Home page
    - Recipe page
    - User page
    - Login page
    - Signup page
- Create frontend endpoints for Dylan's backend ones (it doesn't matter if he hasn't implemented them yet)
- Create basic components for frontend
    - Recipe card
    - Recipe list
    - Recipe form
    - User card
    - User list
    - User form
    - Login form
    - Signup form
- Try setting up user authentication (full-stack item)
    - Signup
    - Login
    - Logout
- Add user centric CRUD features
    - Change password/forgot password
    - Change username
    - Change email
    - Change profile picture
    - Delete account
    - View user's recipes 
    - View user's saved recipes (new feature, will be full-stack work)
    - Save recipe
    - Unsave recipe
    - Remove saved recipes


