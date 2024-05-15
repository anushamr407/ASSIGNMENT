import React, { useState } from 'react';
import axios from 'axios';

const RequestLeave = () => {
    const [formData, setFormData] = useState({
        employeeId: '',
        leaveType: '',
        startDate: '',
        endDate: '',
    });

    const { employeeId, leaveType, startDate, endDate } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/leaves/request', formData);
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="employeeId" value={employeeId} onChange={onChange} required />
            <input type="text" name="leaveType" value={leaveType} onChange={onChange} required />
            <input type="date" name="startDate" value={startDate} onChange={onChange} required />
            <input type="date" name="endDate" value={endDate} onChange={onChange} required />
            <button type="submit">Request Leave</button>
        </form>
    );
};

export default RequestLeave;
