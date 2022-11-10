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
//             name:"sumit",
//             class:"BA",
//             sallery:'40LPA'
//         },
//     ])
// }) 
// app.listen(5000)




// Make HTML Pages==============================================================

// const express =require('express');
// const path=require('path');

// const app=express();
// const publicPath=path.join(__dirname,'public');

// app.use(express.static(publicPath))
// app.use(express.static(publicPath))


// app.listen(5000);


// REMOVE EXTENSION FROM URL======================================================

// const express=require('express');
// const path=require('path');
// const app=express();

// const publicPath=path.join(__dirname,'public');

// app.use(express.static(publicPath));

// app.get('/',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)


// })
// app.get('/home',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('*',(req,resp)=>{
//     resp.send("404 ! Pae not found")
// })
// app.listen(5000)


// TEMPLATE ENGINE====================================================================

// const express=require('express');
// const app = express();

// app.set('view engine',"ejs");

// app.get('/profile',(req,resp)=>{
//     const user={
//         name:'rajat',
//         email:"rajatv785v@gmail.com"
//     }
//     resp.render('profile',{user})
// })
// app.listen(4000);


// DYNAMIC PAGE WITH EJS=================================================

// const express=require('express');
// const app=express();
// app.set('view engine','ejs');

// app.get('/profile',(req,resp)=>{
//     const user={
//         name:'rajat',
//         email:'Rajatv785v@gmail.com',
//         add:'khutar',
//         distt:'spn',
//         state:'up',
//         // skills:['php','java','js','python']
//     }
//     resp.render('profile',{user})
// })
// app.listen(5000)


// EXPRESS JS MIDDLEWARE================================================

// const express=require('express');
// const app=express();


// const appFilter=(req,resp,next)=>{
// if(!req.query.age){
//     resp.send("Plese enter age")
// }
// else if(req.query.age<18){
//     resp.send("Chote ho abhi")
// }
// else{
//     next();
// }
// }
// app.use(appFilter)

// app.get('/',(req,resp)=>{
//     resp.send("This is a home page")
// })
// app.get('/about',(req,resp)=>{
//     resp.send("This is a about page")
// })
// app.get('/contct',(req,resp)=>{
//     resp.send("This is a contact page")
// })
  
// app.listen(4000)



// ROUTE LEVEL MIDDLEWARE========================================================================
const express=require('express');
const app=express();

//Using middleware storing a file middleware.js 
// const appFilter=require('./middleware')
// const route=express.Router()
// // app.use(appFilter)

// app.get('',(req,resp)=>{
//     resp.send("this is a home page")
// })
// route.get('/about',(req,resp)=>{
//     resp.send("this is a About page")
// })
// route.get('/contact',(req,resp)=>{
//     resp.send("this is a contact page")
// })
// app.get('/skills',(req,resp)=>{
//     resp.send("this is a skills page")
// })
// app.use('/',route);
// app.listen(4000);



// INSTALL MONGO-DB===============================================================================


//CONNNECT MONGO DB WITH NODE JS============================================================

//install npm package of mongo db

//  const {MongoClient} =require('mongodb');

// const url='mongodb://localhost:27017';

// const database='e-comm'

// const client=new MongoClient(url);

// async function  getData(){
//     let result=await client.connect();
//     let db= result.db(database)
//     let Collection = db.collection('products');
//     let response = await Collection.find({}).toArray()
//     console.log(response);

// }
// getData();



// READ DATA FROM MONGO DB==========================================================================



















