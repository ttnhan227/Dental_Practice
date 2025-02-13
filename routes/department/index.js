const express = require('express');
const router = express.Router();
const Department = require('../../models/department');

router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.render('department', { departments: departments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const department = new Department({
    name: req.body.name
  });

  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/create', (req, res) => {
  res.render('department_create');
});

router.get('/:id', getDepartment, (req, res) => {
  res.json(res.department);
});

router.get('/:id/edit', getDepartment, (req, res) => {
  res.render('department_edit', { department: res.department });
});

router.patch('/:id', getDepartment, async (req, res) => {
  if (req.body.name != null) {
    res.department.name = req.body.name;
  }

  try {
    const updatedDepartment = await res.department.save();
    res.redirect('/departments');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getDepartment, async (req, res) => {
  try {
    await Department.deleteOne({ _id: req.params.id });
    res.redirect('/departments');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getDepartment(req, res, next) {
  let department;

  try {
    department = await Department.findById(req.params.id);
    if (department == null) {
      return res.status(404).json({ message: 'Cannot find department' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.department = department;
  next();
}

module.exports = router;