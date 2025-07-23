# Pets Paradise Backend API

## Overview
Pets Paradise is a web application that provides a catalog of pets, allowing users to perform CRUD operations on pet and user data. The backend is built using Node.js, Express, and MongoDB.

## Features
- User and administrator creation
- CRUD operations for pets
- MongoDB integration for data persistence

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd petsparadise/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Update the MongoDB connection string in `src/config/db.js` to point to your MongoDB instance.

### Running the Application
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints

### Pets
- **GET /pets**: Retrieve all pets
- **GET /pets/:id**: Retrieve a pet by ID
- **POST /pets**: Create a new pet
- **PUT /pets/:id**: Update a pet by ID
- **DELETE /pets/:id**: Delete a pet by ID

### Users
- **GET /users**: Retrieve all users
- **GET /users/:id**: Retrieve a user by ID
- **POST /users**: Create a new user
- **PUT /users/:id**: Update a user by ID
- **DELETE /users/:id**: Delete a user by ID

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.