import express from 'express';
import {createServer} from 'node:http'

const app=express();

const port=3000;

const server= createServer(app)
app.get('/', (req,res) => {
    res.json("Hello world")
})

app.listen(port,() =>{
    console.log('server allumer ')
})


