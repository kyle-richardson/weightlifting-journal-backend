# back-end

### Welcome to the Back End of your Weight Lifting Journal! 

# This app will:
* 
    1. Let you register, login, and edit users
    2. Create, review, update, and delete workout data
        * Name of exercise
        * Region of body workout targets
        * Weight lifted
        * Amount of reps and sets completed
        * Date completed

# Our Mission Statement:
* Ease of use, convenience, and accountability!

# Endpoints
* | Method | URL            | Description  
<!-- Auth  -->
* | POST   | /api/auth/register | Registers a user using the information sent inside the `request body` in `/json/`. Example body: { "username": "iLoveLambda", "password": "pass", "department": "Student" }
* | POST   | /api/auth/login    | Logs in a user using the information sent inside the `request body` in `/json`. Example body: { "username": "iLoveLambda", "password": "pass" }. **Should return a cookie that expires in 1 day**
* | GET    | /api/auth/logout   | Logs user out, deletes cookie.
<!-- Users  -->
* | GET    | /api/users     | Returns an array of all the user objects contained in the database. **Must be logged in as Admin**
* | GET    | /api/users/:id | Returns the user object with the specified `id`. **Must be logged in as Admin OR be logged in as user with specified id**
* | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user. **Must be logged in as Admin OR be logged in as user with specified id**
* | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified document. **Must be logged in as Admin OR be logged in as user with specified id**
<!-- Users Workouts -->
* | GET    | /api/users/workouts/:id | Takes `User ID` as a parameter. Returns list of specified users-workouts (including all reps/sets/etc).
* | POST   | /api/users/workouts/:id | Takes `User ID` as a parameter. Adds a workout to users-workouts using information sent inside the `request body` in `/json/`. Example body: { "workout_id": "1", "user_id": "1", "weight": "30.0", "reps": "10", "sets": "3" } 
* | DELETE | /api/users/workouts/:id | Takes `User's workout ID` as a parameter. Deletes the user's workout. 
<!-- Workouts  -->
* | GET    | /api/workouts  | Returns an array of all the workouts contained in the database.
* | GET    | /api/workouts/:id | Returns the workout object with the specified `id`.
* | DELETE | /api/workouts/:id | Removes the workout with the specified `id` and returns the deleted workout. 
* | PUT    | /api/workouts/:id | Updates the workout with the specified `id` using data from the `request body`. Returns the modified document. 
