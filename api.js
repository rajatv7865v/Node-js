// Get API=====================================================================

// const express = require("express");
// const dbconnect = require("./mongodb");

// const app = express();

// app.get("/", async (req, resp) => {
//   let data = await dbconnect();
//   data=await data.find().toArray();
//   resp.send(data);
// });
// app.listen(5000);

//POST API=========================================================================

// const express = require("express");
// const dbconnect = require("./mongodb");

// const app = express();
// app.use(express.json());

// app.post("/",async(req, resp) => {
//     let db=await dbconnect();
//     let result=db.insertMany(req.body);
//   resp.send(req.body);
// });

// app.listen(5000);

// PUT API==================================================================================

// const express = require("express");
// const dbconnect = require("./mongodb");

// const app = express();

// app.use(express.json());

// app.put('/',async(req,resp)=>{
//     let db=await dbconnect();
//     let result=await db.updateOne(
//         {name:'1+ nord 2'},{
//             $set:req.body
//         }
        
//     )
//     resp.send(req.body)
// })
// app.listen(5000);



// DELETE API===============================================================================

// const express=require('express');
// const dbconnect=require('./mongodb');

// const app=express();

// app.use(express.json());

// app.delete('/',async(req,resp)=>{
//   let db=await dbconnect();
//   let result=await db.deleteOne(req.body);
//   resp.send(result.acknowledged)
// })
// app.listen(5000);

