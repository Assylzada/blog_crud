
# 📝 Blog CRUD API

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [API Endpoints](#api-endpoints)
- [Blog Data Model](#blog-data-model)
- [Data Validation & Error Handling](#data-validation--error-handling)
- [Frontend Interface](#frontend-interface)
- [Testing](#testing)
- [Learning Outcomes](#learning-outcomes)
- [Conclusion](#conclusion)

---

## Project Description
This project is a full-stack CRUD (Create, Read, Update, Delete) blogging application built with **Node.js**, **Express**, and **MongoDB**.  
It allows users to create, read, update, and delete blog posts through a **RESTful API** or a web frontend.

---

## Technologies Used

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

**Frontend:**
- HTML
- CSS
- JavaScript (Fetch API)

**Tools:**
- Visual Studio Code
- Postman
- MongoDB Compass (optional)

---

## Project Structure
```

blog-crud-api
├── models
│   └── Blog.js          # MongoDB Schema
├── routes
│   └── blogRoutes.js    # API Routes
├── public
│   └── index.html       # Frontend UI
├── .env                 # Environment Variables
├── server.js            # Main Server File
├── package.json
└── README.md

````

---

## Setup & Installation

**Clone or Download Project**
```bash
git clone <repository-url>
cd blog-crud-api
````

**Install Dependencies**

```bash
npm install
```

**Environment Variables**
Create a `.env` file in the root folder:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogDB
```

**Start the Server**

```bash
npm run dev
```

**Access the Server:**
[http://localhost:5000](http://localhost:5000)

---

## API Endpoints

| Method | Endpoint   | Description                |
| ------ | ---------- | -------------------------- |
| POST   | /blogs     | Create a new blog post     |
| GET    | /blogs     | Retrieve all blog posts    |
| GET    | /blogs/:id | Retrieve a blog post by ID |
| PUT    | /blogs/:id | Update a blog post         |
| DELETE | /blogs/:id | Delete a blog post         |

---

## Blog Data Model

| Field     | Type   | Required | Default     |
| --------- | ------ | -------- | ----------- |
| title     | String | Yes      | -           |
| body      | String | Yes      | -           |
| author    | String | No       | "Anonymous" |
| createdAt | Date   | Auto     | -           |
| updatedAt | Date   | Auto     | -           |

---

## Data Validation & Error Handling

**Validation:**

* `title` and `body` are required.
* `author` is optional.

**Errors Handled:**

* Missing fields → `400 Bad Request`
* Invalid ID → `400 Bad Request`
* Not found → `404 Not Found`
* Database/server errors → `500 Internal Server Error`

---

## Frontend Interface

The frontend is located in the `public` folder (`index.html`) and provides:

* Add new blog posts
* View all blog posts
* Edit existing posts
* Delete posts

**Access the frontend at:**
[http://localhost:5000](http://localhost:5000)

---

## Testing

* **Postman:** All API endpoints tested for CRUD operations and error handling.
* **Frontend:** Works with Fetch API to perform create, read, update, delete actions.

---

## Learning Outcomes

* Building a RESTful API with Node.js & Express
* Connecting and performing CRUD operations in MongoDB
* Frontend-backend integration using Fetch API
* Handling errors and data validation
* Working in VS Code and testing APIs with Postman

---

## Conclusion

This project demonstrates a fully functional CRUD blogging platform with backend and frontend integration.
It fulfills the assignment requirements and showcases **full-stack development skills**.

```
