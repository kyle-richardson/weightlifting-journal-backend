# back-end

### Welcome to the Back End of your Weight Lifting Journal!

# This app will:

- 1. Let you register, login, and edit users
  2. Create, review, update, and delete workout data
     - Name of exercise
     - Weight lifted
     - Amount of reps and sets completed
     - Date completed

# Our Mission Statement:

- Ease of use, convenience, and accountability!

# Endpoints

<!-- BASE URL -->

- | BASE URL | **https://lift-journal.herokuapp.com**

- | Method | **URL** | Description

<!-- Auth  -->

- | POST | **/api/auth/register** | Registers a user using the information sent inside the `request body` in `/json/`. Example body: { "username": "TheOfficialAdmin", "password": "adminpassword", "department": "Admin" } `department` can be either `Student` or `Admin`.
- | POST | **/api/auth/login** | Logs in a user using the information sent inside the `request body` in `/json`. Example body: { "username": "TheOfficialAdmin", "password": "adminpassword" }. **Should return a cookie that expires in 1 day**
- | GET | **/api/auth/logout** | Logs user out, deletes cookie.

<!-- Users  -->

**Must be logged in as Admin, OR as user with ID in params**

- | GET | **/api/users** | Returns an array of all the user objects contained in the database.
- | GET | **/api/users/:id** | Returns the user object with the specified `id`.
- | DELETE | **/api/users/:id** | Removes the user with the specified `id` and returns the deleted user.
- | PUT | **/api/users/:id** | Updates the user with the specified `id` using data from the `request body`. Returns the modified document.

<!-- Workouts -->

**NOT Restricted**

- | GET | **/api/workouts/:id** | Takes `User ID` as a parameter. Returns list of specified workouts (including all reps/sets/etc).
- | POST | **/api/workouts** | Adds a workout to workouts using information sent inside the `request body` in `/json/`. Example body: { "user_id": "1", "workout_name": "Curls", "muscle_group": "biceps", "weight": "30.0", "reps": "10", "sets": "3", "date_created": "Jan 9th 2020" } `user_id`, `workout_name`, and `date_completed` are **required** A workout id will be created automatically, and can be used to edit/delete.
- | PUT | **/api/workouts/:id** | Takes `Workout ID` as a parameter. Updates the workout using information sent inside the `request body` in `/json/`.
- | DELETE | **/api/workouts/:id** | Takes `Workout ID` as a parameter. Deletes the user's workout.
