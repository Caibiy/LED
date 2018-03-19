const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const port = 8080
const led = require('./model/led')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))
})

//接口设置
app.post('/api/led',(req,res)=>{
    res.json(led.status())
})

//端口监听
app.listen(port,()=>{
    console.log("Server run at:"+port);
})
