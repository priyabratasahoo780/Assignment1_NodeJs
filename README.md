# 📝 Notes Management REST API

[![Node.js Version](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen.svg)](https://www.mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/priyabratasahoo780/Assignment1_NodeJs/graphs/commit-activity)

A robust, production-ready **Notes Management API** built with the MERN stack (Node, Express, MongoDB). This API follows professional RESTful standards, implementing full CRUD operations, bulk actions, and clean MVC architecture.

---

## 🌟 Key Features

- ✅ **Full CRUD**: Create, Read, Update, and Delete notes with ease.
- 🚀 **Bulk Operations**: Create and delete multiple notes in a single request for high efficiency.
- 🔍 **Strict Validation**: Input validation for ObjectIds and required fields ensuring data integrity.
- 🏗️ **MVC Architecture**: Clean separation of concerns between Models, Controllers, and Routes.
- 🛠️ **RESTful Standards**: Proper use of HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
- 📝 **Automatic Timestamps**: Tracking when notes are created and last updated.

---

## 🛠️ Tech Stack

- **Core**: Node.js, Express.js
- **Database**: MongoDB via Mongoose ODM
- **Environment**: dotenv for secure configuration
- **Development**: Nodemon for seamless DX

---

## 📁 Project Structure

```text
notes-app/
├── src/
│   ├── config/          # Database connection logic
│   ├── controllers/     # Business logic & request handling
│   ├── models/          # Mongoose schemas & data validation
│   ├── routes/          # API endpoint definitions
│   ├── app.js           # Express app configuration
│   └── index.js         # Server entry point
├── .env.example         # Template for environment variables
├── package.json         # Project manifests & scripts
└── README.md            # Documentation
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) service running locally or a MongoDB Atlas URI

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/priyabratasahoo780/Assignment1_NodeJs.git

# Move into project directory
cd Assignment1_NodeJs

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://127.0.0.1:27017/notes-db
PORT=5000
```

### 4. Running the App
```bash
# Start development server with Nodemon
npm run dev

# Start production server
npm start
```

---

## 📌 API Reference

### Notes Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/notes` | Fetch all notes (Sorted by newest first) |
| **GET** | `/api/notes/:id` | Fetch a single note by its unique ID |
| **POST** | `/api/notes` | Create a new note |
| **POST** | `/api/notes/bulk` | Create multiple notes at once |
| **PUT** | `/api/notes/:id` | Replace an entire note (All fields required) |
| **PATCH** | `/api/notes/:id` | Update specific fields of a note |
| **DELETE** | `/api/notes/:id` | Delete a single note |
| **DELETE** | `/api/notes/bulk` | Delete multiple notes using an array of IDs |

---

## 📊 Request & Response Examples

### Create Note (POST)
**Endpoint:** `/api/notes`  
**Body:**
```json
{
  "title": "Project Meeting",
  "content": "Discuss API documentation on Friday.",
  "category": "work",
  "isPinned": true
}
```

### Success Response Structure
```json
{
  "success": true,
  "message": "Note created successfully",
  "data": { ... }
}
```

---

## 💡 Concepts: PUT vs PATCH

This API implements the semantic difference between these two methods:

- **PUT**: Used for **Replacement**. Requires the full object. If fields are missing, they will be overwritten/reset.
- **PATCH**: Used for **Partial Updates**. Only the fields sent in the body will be modified.

---

## 👨‍💻 Author

**Priyabrata Sahoo**
- 🌍 GitHub: [@priyabratasahoo780](https://github.com/priyabratasahoo780)
- 🚀 Live Backend: [https://assignment1-nodejs-nl6x.onrender.com](https://assignment1-nodejs-nl6x.onrender.com)
- 📝 GitHub Repository: [https://github.com/priyabratasahoo780/Assignment1_NodeJs](https://github.com/priyabratasahoo780/Assignment1_NodeJs)

---

## ⭐ Show your support

If you like this project, please give it a ⭐ on [GitHub](https://github.com/priyabratasahoo780/Assignment1_NodeJs)!
