const express = require('express');
const app  = express();
const port = 5000;
var  cors =require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    return res.send('hello tien tai heo');
});
const connectDB=require('./Config/connectDb.js')
connectDB();
app.listen(port,()=>{
    console.log(` server listening on port ${port}`);
})


