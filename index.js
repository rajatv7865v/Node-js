// let a=8;
// let b=14;
// let c=a+b;
// console.log(c)

//Create Server==============================================================

// const http=require('http');
// const data=require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// Input from Commandline========================================================

// console.log(process.argv);

// const fs=require('fs');
// fs.writeFileSync('1.txt','this is a text file')

// const fs = require('fs');
// fs.unlinkSync('apple.txt')

// const fs=require('fs');
// const path=require('path');

// const dirPath=path.join(__dirname,'files');
// // console.log(dirPath);
// for(var i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/Hello${i}.txt`,'this is file')
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

// CRUD with file system ===================================================================

// const fs=require('fs');

// const path=require('path');

// const dirPath=path.join(__dirname,'CRUD');

// fs.writeFileSync(dirPath + '/Create.json' , 'this is file');

// const fs  = require('fs');
// const path = require('path');

// const dirPath=path.join(__dirname,'CRUD')

// fs.unlinkSync(dirPath +'/abc.txt','this is file');

// ==================================EXPRESS JS==============================================

// const express = require("express");
// const app = express();

// app.get("/", (req, resp) => {
//     console.log(req.query)
//   resp.send("hello,this is home page");
// });
 
// app.get("/about", (req, resp) => {
//     resp.send("hello,this is about page");
//   });

// app.listen(7000);


// ==========================CONNECT WITH MONGO==================================================

// const {MongoClient} =require('mongodb');

// const url = `mongodb://localhost:27017`;
// const database='e-comm'
// const client=new MongoClient(url);

// async function getData(){
//     let result= await client.connect();
//     let db=result.db(database);
//     let collection=db.collection('products');
//     let response=await collection.find().toArray();
//     console.log(response);
// }
// getData();

// Read Data from Data base========================================================
 
// const dbconnect = require('./mongodb');

// async function data(){
//     let data=await dbconnect();
//      data= await data.find().toArray();
//     console.log(data);
// };
// data();

// ====================================== MONGOOSE =======================================

const mongoose = require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSch=new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductsModel = mongoose.model('products',productSch);
    let data=new ProductsModel({name:"m8",price:456});
    let result=await data.save();
    console.log(result);
}
main();




















