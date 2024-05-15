import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        department: '',
        designation: '',
        contact: '',
    });

    const { name, employeeId, department, designation, contact } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/employees/add', formData);
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} required />
            <input type="text" name="employeeId" value={employeeId} onChange={onChange} required />
            <input type="text" name="department" value={department} onChange={onChange} required />
            <input type="text" name="designation" value={designation} onChange={onChange} required />
            <input type="text" name="contact" value={contact} onChange={onChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
