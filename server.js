'use strict';
require('dotenv').config();
const express =require('express');
const cors =require('cors');

const pg=require('pg');
const superagent=require('superagent');

const methodOverride=require('method-override');

const server=express();
server.use(express.json());
server.use(express.urlencoded({extened:true}));
server.set('view engine','ejs');


const client=new pg.Client(process.env.DATABASE_URL);
const PORT=process.env.PORT;

server.use(methodOverride('metho'));

server.use(express.static('./public'))

client.connect()
.then(()=>{
server.listen(PORT,()=>console.log('You are kisten on PORT :', PORT))
})