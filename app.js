const express = require('express');
const app = express();  
app.use(express.json());
const mongoose = require('mongoose');



//DATABASE CONNECTION
//localhost ip = 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/report-card-app-mern24').then(() => {
    console.log('Database connected');
}).catch(err => console.log(err));

const studentRoutes = require('./src/routes/studentRoutes');
app.use('/student', studentRoutes);


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})