# Dental Practice HR Management System

A Node.js and MongoDB-based application designed to manage departments and employees for a dental practice.

## Features

- Department management (create, read, update, delete)
- Employee management with detailed information tracking
- Proper separation of concerns using Express.js routes and controllers
- Containerized deployment using Docker for easy setup and consistency

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ttnhan227/Dental_Practice.git
```

2. Navigate to the project directory:

```bash
cd Dental_Practice
```

3. Build and start the application using Docker:

```bash
docker-compose build
docker-compose up
```

## Usage

- Access the application at `http://localhost:3000`
- Use the provided routes to manage departments and employees

## Configuration

- Update the MongoDB connection string in the environment files
- Configure any additional environment variables as needed

### Creating the .env file

Create a `.env` file in the root directory of the project with the following content:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
