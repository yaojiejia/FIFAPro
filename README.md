# FIFA API

Welcome to the FIFA Players and Teams API! This API allows users to request information about players and teams in FIFA. It provides endpoints to retrieve data such as player names, team names, and other related information.
Example: https://fifapro.onrender.com/api/players/getByName?name=mbapp&version=24

## Table of Contents

- [Description](#Description)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Description

The FIFAPro API project includes the following key features:

- **Player Data Retrieval:** Develop endpoints to retrieve information about FIFA players including their names, teams, and other relevant details.
- **Team Data Retrieval:** Implement endpoints to retrieve information about FIFA teams including their names and other related data.
- **RESTful API:** Create a RESTful API using Node.js and Express.js to handle client requests and serve the required data.
- **Database Integration:** Utilize MongoDB to store and manage player and team data efficiently.
- **API Documentation:** Document the API endpoints, request formats, and response structures for ease of use by developers.
- **Error Handling:** Implement robust error handling mechanisms to ensure smooth operation of the API.
- **Deployment:** Deploy the API on a cloud service for continuous availability and scalability.

## Project Structure

1. **Routes:** Define routes and request handling logic for player and team endpoints.
2. **Controllers:** Implement controller functions to handle requests, interact with the database, and send responses.
3. **Database Models:** Define MongoDB schemas by using the Prisma library for players and teams and create models for data manipulation.
4. **Middleware:** Implement ExpressJS for request validation, error handling, and other pre-processing tasks.
5. **API Documentation:** Document API endpoints, request formats, and response structures using Swagger.
6. **Testing:** Develop unit tests and integration tests to ensure the correctness and reliability of the API. Facilitated API endpoint testing by Postman.
7. **Deployment:** Deploy the API Render.

### Prerequisites

Ensure you have the following software or website set or installed on your local machine:

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (requires a new account and database)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yaojiejia/FIFAPro.git
   cd FIFAPro
2. Add .env:
   ```sh
   Create a new .env file under the root directory, specify the database URL as the following:
   DATABASE_URL = "UR MONGO CONNECTION STRING"
3. Install Dependencies and Running

   ```sh
   npm install
   npm start
   or nodemon:
   npm no
4. 
### Api Endpoints
Under construction

### Contributing
I welcome contributions to this project. To contribute, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

For now an update on the player's stats is urgent since FC 25 will be coming out soon
