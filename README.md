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
cd dental-practice-hr-management
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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
