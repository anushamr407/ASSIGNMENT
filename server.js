const express = require('express');
const app = express();
const sequelize = require('./config');
const employeeRoutes = require('./routes/employees');
const leaveRoutes = require('./routes/leaves');

app.use(express.json());
app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.sync();
});
