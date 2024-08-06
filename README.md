# Node-js-course 
# Biblioteca API 📖

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#techs)
3. [Project Structure](#project-structure)
4. [API Endpoints](#api-endpoints)
   - [Authentication](#authentication)
   - [Books](#books)
5. [Using JSON Web Tokens](#using-json-web-tokens)
6. [Installation](#installation)

## Introduction

This API provides functionalities to manage a library system. It includes endpoints for user authentication and book management, built using Node.js, Express, and MongoDB with Mongoose.

## Technologies used
- NodeJs
- Express
- MongoDb
- Mongoose
- JsonWebToken

## Project Structure
```
root/
├── config/
├── controllers/
├── models/
└── routes/
```

The system follows a client-server architecture and utilizes a MongoDB database managed with Mongoose to handle data storage.

The server is built using Express, and you can find its code in /controllers, /models, and /routes. The client-side implementation is not explicitly mentioned but would generally be included in a separate directory if present.

Additionally, a `./env` file is recommended with the following variables:
`PORT`: The port on which the server will listen.
`JWT_SECRET_WORD` : The secret word used for JSON Web Token (JWT) authentication.
`CONNECTION_STRING` = The connection string for MongoDB.

## Api Endpoints

### Authentication

#### POST /users/register

Register a new user.

**Request Body:**

```json
{
  "username": "user",
  "password": "pass"
}
```
#### POST /users/login

Authenticate a user and return a token.

**Request Body:**

```json
{
  "username": "user",
  "password": "pass"
}
```
### Books

#### GET /books/

Retrieve all books.

#### GET /books/:id

Retrieve a book by its ID.

#### POST /books/

Create a new book (requires user authentication).

**Request Body:**

```json
{
  "title": String,
  "isbn": String,
  "category": String,
  "price": Number,
  "authorName": String,
  "yearOfRelease": Number,
  "sinopsis": String
}
```
#### PATCH /books/:id

Update an existing book (requires user authentication).

#### DELETE /books/:id

Delete a book by its ID (requires user authentication).

##### Example json for books
```json
  {
    "title": "El Aleph",
    "isbn": "978-987-566-566-5",
    "category": "Short Stories",
    "price": 15.99,
    "authorName": "Jorge Luis Borges",
    "yearOfRelease": 1949,
    "sinopsis": "A collection of short stories by Argentine writer Jorge Luis Borges. Each story explores the themes of infinity, labyrinths, and the nature of reality."
  }
```
```json
  {
    "title": "Rayuela",
    "isbn": "978-950-511-900-4",
    "category": "Novel",
    "price": 18.50,
    "authorName": "Julio Cortázar",
    "yearOfRelease": 1963,
    "sinopsis": "An experimental novel by Argentine writer Julio Cortázar. The book can be read in multiple sequences, offering different narrative paths and outcomes."
  }
```
```json
  {
    "title": "Martín Fierro",
    "isbn": "978-950-03-0981-8",
    "category": "Epic Poetry",
    "price": 12.00,
    "authorName": "José Hernández",
    "yearOfRelease": 1872,
    "sinopsis": "An epic poem by Argentine writer José Hernández. It tells the story of a gaucho named Martín Fierro, his adventures, and his resistance against the injustices of society."
  }
```


## Using JSON Web Tokens

This API uses JSON Web Tokens (JWT) for authentication. To access protected routes, include a valid JWT in the Authorization header of your requests.


### Example Header:

```
Authorization: Bearer your.jwt.token.here
```

## Installation

To install the project, run:

```
git clone https://github.com/AgustinFRUni/node-js-course.git
cd node-js-course
npm install
```









