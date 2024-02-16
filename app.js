const express = require("express");

const db = require('./db/conn');
const PORT = process.env.PORT;
const cors = require("cors");
const authRoute = require('./router/auth-router');
const employeeRoute = require('./router/employee-router');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoute);
app.use('/employee', employeeRoute);

app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})
