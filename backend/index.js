const express = require('express');
const app=express();

const port=4000;
const userRouter=require('./routers/userRouter');
const createRouter=require('./routers/createRouter');
const utilRouter=require('./routers/util');

const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/create',createRouter);
// added multer
app.use('/util',utilRouter);

app.use(express.static('./uploads'));


app.get('/',(req,res)=>{
    res.send('response from backend');
})
app.get("/add",(req,res)=>{
    res.send('response from add route')
})
app.get("/update",(req,res)=>{
    res.send('response from update route')
})
app.get("/delete",(req,res)=>{
    res.send('response from delete route')
})




app.listen(port,()=>{
    console.log("server started");
});