import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setAuth }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth', formData);
            localStorage.setItem('token', res.data.token);
            setAuth(true);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} required />
            <input type="password" name="password" value={password} onChange={onChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
