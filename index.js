//  CREATE LOCAL SERVER ================================================================================
// const http=require('http');
// http.createServer((req,resp)=>{
//   resp.write("<h1>Hello world</h1>");
//   resp.end();
// }).listen(5000)

// USE APACKAGE FOR COLOR ==>
// const colors=require('colors')
// console.log("package".bgblue)


// INSTALL NODEMON GLOBALLY ===========================================================================
// console.warn("Try Nodemon start with update ");


// CREATE BASIC API====================================================================================
// const api=require('./api')
// const http=require('http');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application/json'});
// resp.write(JSON.stringify(api));
// resp.end();
// }).listen(4000)


// INPUT FROM COMMAND LINE ===========================================================================
// console.log(process.argv)

// CREATE A FILE=======================================================================================
// const fs=require('fs');
// const file=process.argv
// fs.writeFileSync(file[2],file[3]);

// REMOVE OR ADD A FILE ================================================================================
// const fs=require('fs');
// const input=process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input");
// }

// CREATE FILE IN A FOLDER USING LOOP ==================================================================
// const fs=require('fs');
// const path=require('path');

// const pathdir=path.join(__dirname,'files');

// for(let i=0;i<5;i++){
//  fs.writeFileSync(`${pathdir}/hello${i}.txt`,"my name is rajat")
// }


// READ AND LISTING FILE================================================================================
//  const fs=require('fs');
//  const path=require('path');

//  const dirpath=path.join(__dirname,'files');
//  fs.readdir(dirpath,(err,files)=>{
//   files.map((item)=>{
//   console.log(item)
//   })
//  })


//CRUD (CREATE READ UPDATE DELETE) OPERATIO WITH FILE SYSTEM ===========================================
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'crud');
// const filepath=`${dirpath}/income.txt`
// fs.writeFileSync(filepath,"this is a file for testing");
// fs.readFile(filepath,'utf-8',(err,item)=>{
//    console.log(item);
// })
// fs.appendFile(filepath,"this file is using for append file",(err)=>{
//     if(!err) console.log("Succesfully")
// })
// fs.rename(filepath,`${dirpath}/inter.txt`,(err)=>{
//     if(!err) console.log("successfully")
// })
// fs.unlinkSync(`${dirpath}/inter.txt`);


// ASYCRONOUS BASIC IN NODE JS ==========================================================================
// JAVASCRIPT AND NODE JS IS ASCNCRONOUS.
// AASCRONOUS IS FAST BEACAUSE ITS NOT WAIT FOR COMPLETE ThE TASK.

// console.log("start");
// setTimeout(()=>{
//     console.log("Process");
// },2000)
// console.log("end");

// let a=10;
// let b=0;
// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b);


// HANDLE ASYNCRONOUS DATA IN NODE JS======================================================================
//   let a=20;
//   let b=0;

//   let wiatingData=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)

//     },2000)
//   })

//   wiatingData.then((data)=>{
//     b=data;
//     console.log(a+b);
//   })


// HOW NODE JS WORK======================================================================================
 

//EXPRESS JS INTRODUCTION ==============================================================================
// it is a framework of node js 

// const express=require('express');
// const app=express();

// app.get('',(req,resp)=>{
//  resp.send("Hii this is Home Page")
// })

// app.get('/about',(req,resp)=>{
//     resp.send("Hello his is about page")
// })

// app.listen(4000)


// Routing Params (Requesting & Response)===================================

// const express=require('express');
// const app=express();

// app.get('',(req,resp)=>{
//     resp.send("Hello this a used respnse"+req.query.name);
//     console.log("Request is===>",req.query)
// })
// app.listen(5000);

// Render HTML & JSON==============================================================

// const express=require('express');
// const app=express();
// app.get('',(req,resp)=>{
//     resp.send(
//         `<h1>This is a form</h1>
//         <input type='text'> Helo </input>
//         <a href='/help'>Help</a>`
//     )
// })
// app.get('/help',(req,resp)=>{
//     resp.send([
//         {
//             name:"rajat",
//             class:"BCA",
//             sallery:'40LPA'
//         },
//         {
//             name:"raj",
//             class:"BCA",
//             sallery:'40LPA'
//         },
//     ])
// })
// app.listen(5000)


// Make HTML Pages==============================================================





















