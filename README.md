# Task-Tracker-Back

This is the back end for the Task Tracker app that I made as my first Vue.js project. It was written in TypeScript with Express.

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
