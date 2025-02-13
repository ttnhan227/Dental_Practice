require('dotenv').config();
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const Department = require('./models/department');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedData = async () => {
  try {
    await Employee.deleteMany({});
    await Department.deleteMany({});

    const departments = [
      { name: 'General Dentistry' },
      { name: 'Pediatric Dentistry' },
      { name: 'Restorative Dentistry' },
      { name: 'Surgery' },
      { name: 'Orthodontics' }
    ];

    const createdDepartments = await Department.insertMany(departments);

    const employees = [
      { name: 'Lisa', surname: 'Harris', department: 'Restorative Dentistry' },
      { name: 'Alfred', surname: 'Christensen', department: 'General Dentistry' },
      { name: 'John', surname: 'Dudley', department: 'General Dentistry' },
      { name: 'Danny', surname: 'Perez', department: 'Restorative Dentistry' },
      { name: 'Sarah', surname: 'Alvarez', department: 'Pediatric Dentistry' },
      { name: 'Constance', surname: 'Smith', department: 'Surgery' },
      { name: 'Travis', surname: 'Combs', department: 'Orthodontics' },
      { name: 'Francisco', surname: 'Willard', department: 'Pediatric Dentistry' },
      { name: 'Janet', surname: 'Doe', department: 'General Dentistry' },
      { name: 'Leslie', surname: 'Roche', department: 'Orthodontics' }
    ];

    const createdEmployees = await Employee.insertMany(employees);

    console.log('Database seeded!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
