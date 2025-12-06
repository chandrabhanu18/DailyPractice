// express
import express from 'express';
const app=express();

// middleware
// app.use(express.json());
// Api call
app.get('/',(req,res)=>{
    res.send("Api Success");
});
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    // logic to add data into database
    res.send("Data Added");
});


app.listen(7000,()=>{
    console.log("Server running at port 7000");
});


// import express from 'express';

// const app = express();

// //middleware function
// // app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello from Middleware");
// })

// app.post('/adduser',(req,res)=>{
//     let data=req.body;
//     //logic to add user
//     console.log(data);
//     res.send("User added successfully");
// })
// app.listen(7009,()=>{
//     console.log("Middleware server started at port 7009");
// })