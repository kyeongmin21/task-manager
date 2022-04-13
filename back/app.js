import express from 'express';
import mongoose from "mongoose";

const app = express();
mongoose.connect('mongodb+srv://min:<password>@cluster0.ahzic.mongodb.net/taskmanager?retryWrites=true&w=majority').then(()=> {
    app.listen(3000, () => console.log('listening to port 3000'));
}).catch(err => console.log(err));
