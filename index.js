const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send({
        h1:"there"
    })
})

app.listen(5000)