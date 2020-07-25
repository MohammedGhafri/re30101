'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const pg = require('pg');
const superagent = require('superagent');

const methodOverride=require('method-override');

const server = express();
server.use(express.json());
// server.use(express.urlencoded({extended: true }));

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');


const client = new pg.Client(process.env.DATABASE_URL);
const PORT=process.env.PORT;

server.use(methodOverride('metho'));

server.use(express.static('./public'));


server.get('/go',(req,res)=>{
    console.log('cvcvvcbcb')
})
server.get('/',(req,res)=>{
    console.log('zzzzzzzzz')
});
server.get('/c',show)

function show(req,res){
    console.log('ddddddd')
}



server.get('*',(req,res)=>{
    res.status(404).send('this route does not exist')
})
client.connect()
.then(()=>{
server.listen(PORT,()=>console.log('You are listen on PORT :', PORT))
})