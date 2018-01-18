const request = require('request');
const axios = require('axios');
const express = require('express');
var app = express();

request({url:`https://jsonplaceholder.typicode.com/posts`, json:true},(error,response)=>{
//console.log(response.body[0].title);
}

);

axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
    console.log(request);  
})

app.use(express.static('./index.html'));

app.get('/',(req,res)=>{
    res.render('hello there');
});

app.listen(3000);