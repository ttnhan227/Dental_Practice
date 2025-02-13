const express = require('express');
const router = express.Router();
const Employee = require('../../models/employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.render('employee', { employees: employees });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      surname: req.body.surname,
      birthDate: req.body.birthDate,
      department: req.body.department
    });

    const newEmployee = await employee.save();
    res.redirect('/employees');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific employee
const Department = require('../../models/department');

// Get the create employee page
router.get('/create', async (req, res) => {
  try {
    const departments = await Department.find();
    res.render('employee_create', { departments: departments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific employee
// Get a specific employee
router.get('/:id', getEmployee, (req, res) => {
  res.json(res.employee);
});

// Get the edit employee page
router.get('/:id/edit', getEmployee, async (req, res) => {
  try {
    const departments = await Department.find();
    res.render('employee_edit', { employee: res.employee, departments: departments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a specific employee
router.patch('/:id', getEmployee, async (req, res) => {
  try {
    if (req.body.name != null) {
      res.employee.name = req.body.name;
    }
    if (req.body.surname != null) {
      res.employee.surname = req.body.surname;
    }
    if (req.body.birthDate != null) {
      res.employee.birthDate = req.body.birthDate;
    }
    if (req.body.department != null) {
      res.employee.department = req.body.department;
    }

    res.employee.department = req.body.department;

    const updatedEmployee = await res.employee.save();
    res.redirect('/employees');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a specific employee
router.delete('/:id', getEmployee, async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.params.id });
    res.redirect('/employees');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getEmployee(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id).populate('department');
    if (employee == null) {
      return res.status(404).json({ message: 'Cannot find employee' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.employee = employee;
  next();
}

module.exports = router;
