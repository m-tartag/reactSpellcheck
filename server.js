const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use('/api/data', require('./routes/api/data'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () =>
  console.log(chalk.yellow.inverse(`Server Connected [Port: ${PORT}]`))
);
