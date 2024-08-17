

---

# Next.js 14 REST API with MongoDB & Mongoose

This project is a REST API built using Next.js 14, MongoDB, and Mongoose. It is based on a tutorial from freeCodeCamp and is tested using Postman.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```env
MONGODB_URI=your-mongodb-uri
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Replace `your-mongodb-uri` with your actual MongoDB connection string.

## Running the API

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints

Here are the available endpoints:

### Users

- **POST** `/api/users` - Create a new user
  - Body: `{ "email": "string", "username": "string", "password": "string" }`

- **GET** `/api/users` - Get all users

- **GET** `/api/users/:id` - Get a user by ID

- **PUT** `/api/users/:id` - Update a user by ID
  - Body: `{ "email": "string", "username": "string", "password": "string" }`

- **DELETE** `/api/users/:id` - Delete a user by ID

## Technologies Used

- **Next.js 14** - React framework for server-rendered apps
- **MongoDB** - NoSQL database for storing data
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB and Node.js
- **Postman** - API testing tool

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

