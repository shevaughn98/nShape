# nShape API Documentation

### `GET` `/`
* Responds with status code 200 and object `{"message" : "Success, Thank you for using the nShape api"}`

## Users
### `GET` `/users`
* Responds with status code 200 and a JSON array of all user's information

### `GET` `/users/:id`
* Responds with status code 200 and a JSON object of a single user's information'
* If user is not authenticated, responds with status code 404

### `POST` `/users/signin`
* Sends user information and responds with status code 200 and a JSON object of that said user.
* Requires a request body with properties:

``` 
{
    "username" : "Example_User",
    "password" : "password",  
}
```

* If body is incomplete, responds with status code 400.

### `POST` `/users/signup`
* Creates a new user and responds with status code 201 and a JSON object of the new user.
* Requires a request body with properties:

``` 
{
    "username" : "Example_User",
    "password" : "password",
    "email" : "example@example.com",
    "name" : "John Doe",
    "birthday" : "2003-05-12",
    "weight" : 135,
    "height" : 180.34,
    "gender" : "male"    
}
```

* If body is incomplete, responds with status code 400.

### `PUT` `/users:id`
* Updates the username, password, email, name, birthday, weight, height and gender of an existing User and responds with status code 200 and the updated User.
* Requires a request body with properties:
``` 
{
    "username" : "Example_User",
    "password" : "password",
    "email" : "example@example.com",
    "name" : "Mary Jane",
    "birthday" : "2003-05-12",
    "weight" : 135,
    "height" : 180.34,
    "gender" : "male"    
}
```
* If body is incomplete, responds with status code 400.
* If User is not found, responds with status code 404.


----------------------------------------------------------------
## Workouts
### `GET` `/workouts`
* Responds with status code 200 and a JSON array of all workouts

### `GET` `/workouts/arms`
* Responds with status code 200 and a JSON array of all arm's workouts

### `GET`  `/workouts/abs`
* Responds with status code 200 and a JSON array of all abs' workouts

### `GET`  `/workouts/fullbody`
* Responds with status code 200 and a JSON array of all full body workouts

### `GET`  `/workouts/legs`
* Responds with status code 200 and a JSON array of all leg's workouts



----------------------------------------------------------------
## Goals
### `GET` `/goals` 
* Responds with status code 200 and a JSON array of all goals.

### `GET` `/goals/:id` 
* Responds with status code 200 and a JSON object of a single goal.
* If goal is not found, responds with status code 404.

### `POST` `/goals`
* Creates a new goal and responds with status code 201 and a JSON object of the new goal.
* Requires a request body with properties:
```
{
    "title" : "my goal",
    "description" : "my description"
}
```
* If body is incomplete, responds with status code 400.

### `PUT` `/goals/:id`
* Updates the title and description of an existing goal and responds with status code 200 and the updated goal.
* Requires a request body with properties:
```
{
    "title" : "my goal",
    "description" : "my description"
}
```
* If body is incomplete, responds with status code 400.
* If goal is not found, responds with status code 404. 

### `PATCH` `/goals/:id/complete`
* Marked a goal as completed and responds with status code 200 and the completed goal.
* If goal is not found, responds with status code 404.

### `DELETE` `/goals/:id`
* Deletes a goal and responds with status code 204.
* If goal is not found, responds with status code 404.