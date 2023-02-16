const dbconnect=require('./mongodb');

async function read(){
    let data=await dbconnect();
    data= await data.find().toArray();
    console.log(data)
}
read();