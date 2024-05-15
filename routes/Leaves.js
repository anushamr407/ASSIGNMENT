const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/LeaveRequest');

router.post('/request', async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.create(req.body);
        res.status(201).json(leaveRequest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const leaves = await LeaveRequest.findAll();
        res.status(200).json(leaves);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Additional routes for approving/rejecting leave requests
module.exports = router;
