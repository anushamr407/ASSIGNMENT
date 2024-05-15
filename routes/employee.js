const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/add', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Additional routes for update and delete
module.exports = router;
