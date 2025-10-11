// const users=require("./MOCK_DATA.json")
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const fs=require("fs");
const port=8000;
const userRouter=require('./routes/user')
const{logReqRes}=require("./middlewares")
const {connectMongoDb} =require('./connection')


connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Hello from Middleware 1")
    
    next();
})
app.use((req,res,next)=>{
  
})
app.use("/user",userRouter);
app.listen(port,()=>console.log(`Server Started at port: ${port}`))

// app.get("/api/user",(req,res)=>{
//    console.log(req.headers);
//     res.json(users);
// })

// app.post("/api/user",(req,res)=>{
//     const body=req.body;
//     if(!body.first_name||!body.last_name||!body.email){
//         res.status(400).json({msg:"All fields are required"})
//     }
//     users.push({...body,id:users.length+1})
//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//         return res.status(201).json({status: "success",id:users.length});
//     });
//     console.log("Body",body);

// })



// .patch((req,res)=>{
//     return res.json({ status : "Pending"})
// })
// .delete((req,res)=>{
//     return res.json({status: "pending"});
// })



// const express = require("express");
// const user=require("./MOCK_DATA.json")

// const app=express();
// const port=8000;

// app.get("/api/user",(req,res)=>{
//     return res.json(user)
// })

// app.get("/user",(req,res)=>{
//     const html=`
//     <ul>
//     ${user.map(user=>(`<li>${user.first_name}</li>`)).join("  ")}
//     </ul>
//     `;
//     res.send(html);
// })

// app.get("/api/user/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const individual_user=user.find(user=>user.id===id)

//     return res.json(individual_user);
// })
// app.post("/api/users",(req,res)=>{
//     return res.json({status:"pending"});
// })

// app.listen(port,()=>console.log(`Server Starte at port :${port}`))
