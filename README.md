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
* | Method | **URL**         | Description  

<!-- BASE URL -->
**https://bw-weight-lifting-journal.herokuapp.com**

<!-- Auth  -->
* | POST   | **/api/auth/register** | Registers a user using the information sent inside the `request body` in `/json/`. Example body: { "username": "TheOfficialAdmin", "password": "adminpassword", "department": "Admin" } `department` can be either `Student` or `Admin`.
* | POST   | **/api/auth/login**   | Logs in a user using the information sent inside the `request body` in `/json`. Example body: { "username": "TheOfficialAdmin", "password": "adminpassword" }. **Should return a cookie that expires in 1 day**
* | GET    | **/api/auth/logout**  | Logs user out, deletes cookie.

<!-- Workouts  -->
* | GET    | **/api/workouts**  | Returns an array of all the workouts contained in the database.
* | GET    | **/api/workouts/:id** | Returns the workout object with the specified `id`.
* | DELETE | **/api/workouts/:id** | Removes the workout with the specified `id` and returns the deleted workout. 
* | PUT    | **/api/workouts/:id** | Updates the workout with the specified `id` using data from the `request body`. Returns the modified document. Example body: { "name": "Squats", "muscle_group":"Quads, Hamstrings, Calves, Glutes, Abductors" }
* | POST   | **/api/workouts** | Creates a workout. Takes a `request body`. Returns the new workout. Example body: { "name": "Squats", "muscle_group":"Quads, Hamstrings, Calves, Glutes, Abductors" }

<!-- Restricted Endpoints -->
**Must be logged in as Admin, OR as user with ID in params**

<!-- Users  -->
* | GET    | **/api/users**     | Returns an array of all the user objects contained in the database. 
* | GET    | **/api/users/:id** | Returns the user object with the specified `id`. 
* | DELETE | **/api/users/:id** | Removes the user with the specified `id` and returns the deleted user. 
* | PUT    | **/api/users/:id** | Updates the user with the specified `id` using data from the `request body`. Returns the modified document. 

<!-- Users Workouts -->
* | GET    | **/api/users/workouts/:id** | Takes `User ID` as a parameter. Returns list of specified users-workouts (including all reps/sets/etc).
* | POST   | **/api/users/workouts/:id** | Takes `User ID` as a parameter. Adds a workout to users-workouts using information sent inside the `request body` in `/json/`. Example body: { "workout_id": "1", "user_id": "1", "weight": "30.0", "reps": "10", "sets": "3" } 
* | DELETE | **/api/users/workouts/:id** | Takes `User's workout ID` as a parameter. Deletes the user's workout. 
