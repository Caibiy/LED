const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const port = 8080

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./view/index.html'))
})

app.post('/api/led',(req,res)=>{
    exec('bash ./bash/led.sh',(err,stdout,stderr)=>{
        if(err){
            res.json({"err":err})
        }
        res.json({"success":stdout});
    })

})
app.listen(port,()=>{
    console.log("Server run at:"+port);
})
