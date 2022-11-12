# Task-Tracker-Back

This is the back end for the Task Tracker app that I made as my first Vue.js project. The front-end repo is [here](https://github.com/JonathanDPotter/task-tracker/blob/master/README.md), and is hosted on Vercel [here](https://task-tracker-weld.vercel.app/).

---

## Technologies Used

I used Express.js and TypeScript to build this project. Tasks are stored on a MongoDB Atlas database and I use Mongoose for database management.

---

## API Routes

```json
{
  "routes": {
    "/": { "get": "Returns this message" },
    "/api/task": {
      "get": {
        "/": "Returns all tasks",
        "/:_id": "Returns task with corresponding id."
      },
      "post": {
        "/": "Creates a new task."
      },
      "put": {
        "/:_id": "Updates task with corresponding id."
      },
      "delete": {
        "/:_id": "Deletes task with corresponing id."
      }
    }
  }
}
```
