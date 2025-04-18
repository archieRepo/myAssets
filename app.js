import express from "express";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing applican

const port = process.env.port || 7000;

app.get('/', () => {
    console.log('this is get log from browser');
})

app.listen(port, () => console.log('server is running on port 7000'));