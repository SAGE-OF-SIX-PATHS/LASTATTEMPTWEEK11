<h1 align="center">Simple Note-Taking API with TypeScript</h1>

<h2 align="center">Node.js X TypeScript X Express x MongoDB</h2>

This project is a **Simple Note-Taking API** built using **Node.js**, **Express**, and **TypeScript**. It allows users to create, read, and delete notes, with all data stored in a **MongoDB** database using **Mongoose**. The API is designed to be simple yet robust, with proper error handling and TypeScript interfaces for type safety.

---

## **Features**
- **Create a Note**: Add a new note with a `title` and `content`.
- **List All Notes**: Fetch all notes stored in the database.
- **Get a Specific Note**: Retrieve a single note by its `id`.
- **Delete a Note**: Remove a note from the database by its `id`.
- **Error Handling**: Custom error classes for better error management.
- **TypeScript**: Strong typing for models, routes, and error handling.
- **Postman Testing**: Fully tested API endpoints using Postman.

---

## **Technologies Used**
- **Node.js**: Runtime environment for the API.
- **Express**: Web framework for building the REST API.
- **TypeScript**: Adds type safety and modern JavaScript features.
- **MongoDB**: Database for storing notes.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **Postman**: Tool for testing API endpoints.

---

## **Steps to Build the API**

### **1. Requirement Gathering**
Before writing any code, we started by gathering requirements for the task. This included:
- Setting up a basic Express server with TypeScript.
- Defining TypeScript interfaces for the `Note` model.
- Using Mongoose to interact with MongoDB.
- Creating RESTful endpoints for CRUD operations.
- Adding custom error handling.
- Testing the API with Postman.

---

### **2. Setting Up the Project**
We initialized a new Node.js project and installed the necessary dependencies:
```bash
npm init -y
npm install express mongoose dotenv
npm install --save-dev typescript ts-node-dev @types/node @types/express @types/mongoose
```
be very careful not to miss any of these commands, so you dont have deployment or production error.

---

## **Steps to Build the API**
In the tsConfig file, please set these rules or uncomment them, you don not need to know all, but enough.

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

Conclusion
This project was a great way to learn how to build a REST API using Node.js, Express, and TypeScript. By following the steps above, we successfully created a simple yet functional note-taking API with proper error handling and TypeScript support. Feel free to expand on this project by adding more features like user authentication or pagination!

---

## **2. Test the API Endpoints**
Your API is already deployed and working. To interact with it, you need to use the `/api/notes` endpoint. Here are the available endpoints:

### **GET All Notes**
Fetch all notes stored in the database.

```bash
GET https://lastattemptweek11.onrender.com/api/notes
```

### **GET a Specific Note**
Fetch a specific note by its `id`.

```bash
GET https://lastattemptweek11.onrender.com/api/notes/<note-id>
```

### **POST a Note**
Create a new note with a `title` and `content`.

```bash
POST https://lastattemptweek11.onrender.com/api/notes
```

### **DELETE a Note**
Delete a note by its `id`.

```bash
DELETE https://lastattemptweek11.onrender.com/api/notes/<note-id>
```

---

## **3. Use Postman to Test the API**
Since the API doesn’t have a frontend, you can use **Postman** to test the endpoints. Here’s how:

1. **Open Postman**:
   - Download and install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/).

2. **Enter the API URL**:
   - For example, to fetch all notes, enter:
     ```
     https://lastattemptweek11.onrender.com/api/notes
     ```

3. **Use the Appropriate HTTP Method**:
   - Select the HTTP method (GET, POST, DELETE) based on the endpoint you want to test.
   - For POST requests, include a JSON body with `title` and `content`:
     ```json
     {
       "title": "My First Note",
       "content": "This is the content of my first note."
     }
     ```

4. **Send the Request**:
   - Click **Send** to interact with the API and view the response.

---

<i align=right>
Proficient_Philip<br>
GitHub: SAGE OF SIXPATHS<br>
Email: nzubeakpamgbo.com</i>