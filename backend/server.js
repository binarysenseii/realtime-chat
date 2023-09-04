const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello from express')
})

app.listen(8080, ()=>{ console.log("server running on port 8080");})