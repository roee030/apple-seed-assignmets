const { response } = require('express');
const express = require('express')
const path = require('path')
const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Server started and is listen to port 5000');
})
//Set public folder
app.use(express.static(path.join(__dirname,'public')))